/* =====================================================
   ★ 여기만 수정하면 됩니다: 장소 데이터 ★
   - x, y : 지도 위 점의 위치 (지도 왼쪽 위가 0%, 오른쪽 아래가 100%)
   - 적지 않은 항목(target, date, photos 등)은 아래 DEFAULT 값이 자동으로 들어갑니다.
   - 실제 결과를 입력한 장소는 example: false 를 꼭 적어 주세요.
   - 장소를 추가하려면 한 줄을 복사해서 붙여 넣고, id는 겹치지 않게 바꾸세요.
   ===================================================== */

// 적지 않은 항목에 자동으로 들어가는 기본값
const DEFAULT = {
  target: "(채취 대상을 입력하세요)",
  date: "2025-00-00",
  photos: [],
  observation: "(예시) 아직 관찰 결과가 입력되지 않았습니다.",
  note: "(예시) 확인되지 않은 예시 정보입니다.",
  example: false
};

const rawPlaces = [

  // ▼ 위쪽 복도 쪽 방
  { id: "print",  name: "인쇄실", x: 17.2, y: 40.8, target: "문 손잡이" ,
    date: "2026-09-17",
    photos: [
      { src: "images/print1.png" },
         { src: "images/print2.jpg" }
    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
     level: "mid"

},
   
{ id: "button",   name: "현관", x: 69.2, y: 35.2, target: "자동문 손잡이",
   date: "2026-09-17",
    photos: [
      { src: "images/button1.jpg" },
     { src: "images/button2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
     level: "bad",

},


   
   { id: "duty",   name: "당직실", x: 49.2, y: 40.8, target: "문",
   date: "2026-09-17",
    photos: [
      { src: "images/duty1.png" },
     { src: "images/duty2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
     level: "bad",

},

{ id: "box",   name: "복도", x: 46.6, y: 24.7, target: "택배 박스",
  date: "2026-09-17",
    photos: [
      { src: "images/box1.png" },
         { src: "images/box2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
     level: "bad"

  },

{ id: "ground", name: "운동장",    x: 26.2, y: 17.2, target: "수도꼭지",
   date: "2026-09-17",
    photos: [
      { src: "images/ground1.png" },
         { src: "images/ground2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
      level: "mid"

  },

// ▼ 오른쪽 방
  { id: "shoes",        name: "현관",   x: 69.1, y: 49.7, target: "신발장 내빈용 실내화",
  date: "2026-09-17",
    photos: [
      { src: "images/sliper1.png" },
          { src: "images/sliper2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
        level: "bad"

  },

{ id: "stair",   name: "계단", x: 56.5, y: 88.8, target: "손잡이",
   date: "2026-09-17",
    photos: [
      { src: "images/stair1.jpg" },
     { src: "images/stair2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
     level: "bad",

},

{ id: "haeng",   name: "행정실", x: 64.4, y: 61.9, target: "손잡이",
   date: "2026-09-17",
    photos: [
      { src: "images/haeng1.jpg" },
     { src: "images/haeng2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
     level: "bad",

},
   

   
   { id: "av",        name: "시청각실",   x: 64.6, y: 71.5, target: "문",
 date: "2026-09-17",
   photos: [
  { src: "images/see1.png" },
  { src: "images/see2.jpg" }
],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
      level: "good"

  },


  // ▼ 아래쪽 복도 쪽 방
  { id: "prep",    name: "준비실",         x: 35.3, y: 92.7, target: "서랍장",
  date: "2026-09-17",
    photos: [
      { src: "images/ready1.png" },
         { src: "images/ready2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
        level: "mid"

  },

{ id: "inquiry", name: "탐구교육1실",    x: 41.4, y: 92.7, target: "키보드",
  date: "2026-09-17",
    photos: [
      { src: "images/key1.png" },
         { src: "images/key2.jpg" },

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
      level: "bad"

  },

{ id: "high", name: "복도",    x: 40.3, y: 75.8, target: "복도 천장",
  date: "2026-09-17",
    photos: [
      { src: "images/high1.png" },
          { src: "images/high2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
      level: "good"

  },

{ id: "elevator", name: "엘리베이터",    x: 11.4, y: 75.6, target: "버튼",
  date: "2026-09-17",
    photos: [
      { src: "images/ele1.png" },
        { src: "images/ele2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
      level: "good"

  },

// ▼ 왼쪽 방
  { id: "clean",    name: "온학습카페",     x: 4.7, y: 50.8, target: "문 손잡이",
  date: "2026-09-17",
    photos: [
      { src: "images/cafe1.png" },
        { src: "images/cafe2.jpg" }

    ],
    observation: "(예시) 흰색의 둥근 집락이 여러 개 관찰됨. 가장자리는 매끈함.",
    note: "(예시) 종류는 확인되지 않았습니다. 외형 관찰만 기록했습니다.",
    example: false,
        level: "mid"

  },
];



// 기본값과 합치기 (보통 수정하지 않아도 됩니다)
const places = rawPlaces.map((p) => ({ ...DEFAULT, ...p }));

/* ===== 아래는 기능 코드입니다 (보통 수정하지 않아도 됩니다) ===== */
const $ = (id) => document.getElementById(id);
const mapWrap = $("map-wrap");

// 1) 장소마다 지도 위에 점 만들기
places.forEach((place) => {
  const btn = document.createElement("button");
  btn.className = "spot " + (place.level || "none");   // 등급(bad/mid/good)에 따라 색이 정해짐  
  btn.title = place.name;                       // 마우스를 올리면 이름 표시
  btn.setAttribute("aria-label", place.name);
  btn.style.left = place.x + "%";               // % 위치라서 지도 크기가 변해도 어긋나지 않음
  btn.style.top = place.y + "%";
  btn.dataset.id = place.id;
  btn.addEventListener("click", () => showPlace(place));
  mapWrap.appendChild(btn);
});

// 2) 장소 정보 보여 주기
function showPlace(place) {
  $("info-empty").hidden = true;
  $("info-content").hidden = false;
  $("info-name").textContent = place.name;
  $("info-example").hidden = !place.example;
  $("info-target").textContent = place.target;
  $("info-date").textContent = place.date;
  $("info-observation").textContent = place.observation;
  $("info-note").textContent = place.note;

  // 선택된 점 색 바꾸기
  document.querySelectorAll(".spot").forEach((b) =>
    b.classList.toggle("active", b.dataset.id === place.id));

  // 사진 목록 만들기
  const box = $("info-photos");
  box.innerHTML = "";
  if (place.photos.length === 0) box.appendChild(missingBox());
  place.photos.forEach((p) => {
    const fig = document.createElement("figure");
    const img = document.createElement("img");
    img.src = p.src;
        img.alt = place.name + " 배양 사진: " + (p.caption || "");
    img.addEventListener("click", () => openLightbox(p));
    // 사진 파일이 없거나 경로가 틀리면 '사진 준비 중' 칸으로 바꿈
    img.addEventListener("error", () => img.replaceWith(missingBox()));
    const cap = document.createElement("figcaption");
        cap.textContent = p.caption || "";
    fig.append(img, cap);
    box.appendChild(fig);
  });

  // 모바일에서는 정보 패널로 자동 이동
  if (window.innerWidth <= 800) $("info-panel").scrollIntoView({ behavior: "smooth" });
}

function missingBox() {
  const d = document.createElement("div");
  d.className = "photo-missing";
  d.textContent = "사진 준비 중";
  return d;
}

// 3) 닫기 버튼
$("close-btn").addEventListener("click", () => {
  $("info-content").hidden = true;
  $("info-empty").hidden = false;
  document.querySelectorAll(".spot").forEach((b) => b.classList.remove("active"));
});

// 4) 사진 확대 / 닫기 (아무 곳이나 누르면 닫힘, Esc 키도 가능)
function openLightbox(p) {
  $("lightbox-img").src = p.src;
    $("lightbox-caption").textContent = p.caption || "";
  $("lightbox").hidden = false;
}
$("lightbox").addEventListener("click", () => ($("lightbox").hidden = true));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") $("lightbox").hidden = true; });

// 5) 지도 이미지가 없을 때 안내
$("map-img").addEventListener("error", () => {
  $("map-img").replaceWith(Object.assign(document.createElement("p"),
    { textContent: "지도 이미지를 찾을 수 없습니다. images 폴더와 파일 이름을 확인하세요.", style: "padding:40px" }));
});

// 6) 위치 찾기 도우미: 주소 끝에 ?edit 를 붙이면 켜집니다
if (location.search.includes("edit")) {
  const tip = document.createElement("div");
  tip.style.cssText = "position:fixed;left:8px;bottom:8px;background:#222;color:#fff;padding:10px 14px;z-index:20;font-size:16px";
  tip.textContent = "지도에서 원하는 곳을 클릭하면 x, y 값이 여기에 나타납니다.";
  document.body.appendChild(tip);
  mapWrap.addEventListener("click", (e) => {
    if (e.target.classList.contains("spot")) return;   // 점 위를 누른 경우는 제외
    const r = mapWrap.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
    const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
    tip.textContent = "x: " + x + ", y: " + y;
  });
}

/* =====================================================
   ★ 미생물 분포도 데이터 (여기만 수정하면 됩니다) ★
   - name : 미생물 이름, percent : 비율(%), color : 원그래프 색
   - 비율의 합이 100이 아니어도 자동으로 100%에 맞춰 계산됩니다.
   - 실제 동정 결과가 나오면 값을 바꾸고 microbeIsExample 을 false 로 바꾸세요.
   ===================================================== */
const microbeIsExample = true;   // true: "예시 데이터" 표시, false: 표시 없음

const microbes = [
  { name: "바실러스속 (예시)",         percent: 30, color: "#2e7d9e" },
  { name: "포도상구균속 (예시)",       percent: 25, color: "#e07a2f" },
  { name: "마이크로코쿠스속 (예시)",   percent: 20, color: "#d4b000" },
  { name: "페니실리움속 곰팡이 (예시)", percent: 15, color: "#5aa469" },
  { name: "기타·미동정",               percent: 10, color: "#9aa5a4" }
];

/* ===== 분포도 기능 코드 (보통 수정하지 않아도 됩니다) ===== */
function drawChart() {
  const total = microbes.reduce((sum, m) => sum + m.percent, 0);
  const legend = $("chart-legend");
  legend.innerHTML = "";
  let start = 0;
  const parts = [];

  microbes.forEach((m) => {
    const share = (m.percent / total) * 100;           // 전체에서 차지하는 비율
    parts.push(m.color + " " + start + "% " + (start + share) + "%");
    start += share;

    // 오른쪽 설명 목록 만들기
    const li = document.createElement("li");
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.background = m.color;
    const text = document.createElement("span");
    text.textContent = m.name + "  " + share.toFixed(1) + "%";
    li.append(swatch, text);
    legend.appendChild(li);
  });

  // 비율만큼 원의 면적을 나눠 색칠하기
  $("pie").style.background = "conic-gradient(" + parts.join(", ") + ")";
  $("chart-example").hidden = !microbeIsExample;
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
