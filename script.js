/* =====================================================
   ★ 미생물 분포도 (장소 데이터에서 자동으로 계산됩니다) ★
   - 위의 장소 목록에 적은 microbes 를 세어서 비율을 만듭니다.
   - 한 장소에서 검출되면 1건으로 셉니다. (집락 수가 아니라 '검출된 장소 수' 기준)
   - 같은 미생물인데 이름이 다르게 적혔다면 아래 microbeAlias 에 추가하세요.
   ===================================================== */
const microbeIsExample = false;   // true: "예시 데이터" 표시, false: 표시 없음

// 이름이 다르게 적힌 같은 미생물을 하나로 합치는 표 ("적은 이름": "합칠 이름")
const microbeAlias = {
  "아스페르길루스(누룩곰팡이)": "누룩곰팡이",
  "아스페르길루스": "누룩곰팡이"
};

// 원그래프 색 (미생물이 많으면 처음부터 다시 돌려 씁니다)
const chartColors = ["#2e7d9e", "#e07a2f", "#d4b000", "#5aa469", "#9a5ab5", "#c2485c", "#9aa5a4"];

// 장소 데이터에서 미생물별 검출 장소 수 세기
function countMicrobes() {
  const counts = {};
  places.forEach((p) => {
    const names = new Set(p.microbes.map((n) => microbeAlias[n] || n));   // 한 장소에서 중복은 1번만
    names.forEach((n) => { counts[n] = (counts[n] || 0) + 1; });
  });
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);                                   // 많은 순서로 정렬
}

/* ===== 분포도 기능 코드 (보통 수정하지 않아도 됩니다) ===== */
function drawChart() {
  const list = countMicrobes();
  const total = list.reduce((sum, m) => sum + m.count, 0);
  const legend = $("chart-legend");
  legend.innerHTML = "";
  $("chart-example").hidden = !microbeIsExample;

  if (total === 0) {
    $("pie").style.background = "#e4f0ee";
    legend.textContent = "아직 입력된 미생물이 없습니다.";
    return;
  }

  let start = 0;
  const parts = [];
  list.forEach((m, i) => {
    const color = chartColors[i % chartColors.length];
    const share = (m.count / total) * 100;               // 전체에서 차지하는 비율
    parts.push(color + " " + start + "% " + (start + share) + "%");
    start += share;

    // 오른쪽 설명 목록 만들기
    const li = document.createElement("li");
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.background = color;
    const text = document.createElement("span");
    text.textContent = m.name + "  " + share.toFixed(1) + "% (" + m.count + "곳)";
    li.append(swatch, text);
    legend.appendChild(li);
  });

  // 비율만큼 원의 면적을 나눠 색칠하기
  $("pie").style.background = "conic-gradient(" + parts.join(", ") + ")";
}

// 열기 / 닫기
$("chart-btn").addEventListener("click", () => {
  drawChart();
  $("chart-modal").hidden = false;
});
$("chart-close").addEventListener("click", () => ($("chart-modal").hidden = true));
$("chart-modal").addEventListener("click", (e) => {      // 바깥 어두운 곳을 눌러도 닫힘
  if (e.target === $("chart-modal")) $("chart-modal").hidden = true;
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") $("chart-modal").hidden = true; });
