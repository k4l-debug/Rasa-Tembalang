// hide loading
window.addEventListener("load", () => {
  setTimeout(
    () => (document.getElementById("loading").style.display = "none"),
    350
  );
});

// Data: restaurants
const restaurants = [
  {
    id: "nasmafia",
    name: "Nasi Goreng Mafia",
    type: "berat",
    img: "https://i.pinimg.com/1200x/91/9d/77/919d7741edf8c5e879c7858c3ba83a7c.jpg",
    rating: 4.6,
    price: "Rp 1 - Rp 18.000",
    hours: "10.00 - 23.00",
    address: "Jl. Banjarsari Raya, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Nasi+Goreng+Mafia+Tembalang",
    desc: "Nasi goreng porsi besar dengan bumbu khas pedas-gurih, cocok untuk yang suka porsi kenyang dan pedas.",
  },
  {
    id: "bebekslamet",
    name: "Bebek H. Slamet",
    type: "berat",
    img: "https://i.pinimg.com/736x/98/08/9b/98089b06d43860755a16b0223cea91c4.jpg",
    rating: 4.4,
    price: "Rp 1 - Rp 28.000",
    hours: "11.00 - 22.00",
    address: "Jl. Slamet Riyadi, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Bebek+H+Slamet+Tembalang",
    desc: "Bebek goreng kremes dengan sambal andalan, gurih dan renyah, favorit keluarga.",
  },
  {
    id: "ayambakar",
    name: "Ayam Bakar Primarasa",
    type: "berat",
    img: "https://i.pinimg.com/1200x/6e/9c/d9/6e9cd98efe1a8baaba02b70292b547b6.jpg",
    rating: 4.5,
    price: "Rp 1 - Rp 25.000",
    hours: "10.00 - 22.00",
    address: "Jl. Rembuskari, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Ayam+Bakar+Primarasa+Tembalang",
    desc: "Ayam bakar spesial dengan bumbu manis-gurih, tekstur empuk dan aroma bakaran yang kuat.",
  },
  {
    id: "satekempleng",
    name: "Sate Ayam Pak Kempleng",
    type: "berat",
    img: "https://i.pinimg.com/736x/49/74/1a/49741ac0e9739fbffe02ddafa0d0a4a9.jpg",
    rating: 4.7,
    price: "Rp 1 - Rp 22.000",
    hours: "16.00 - 22.30",
    address: "Jl. Kempleng, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Sate+Ayam+Pak+Kempleng+Tembalang",
    desc: "Sate juicy dengan bumbu kacang kental, porsi pas dan harga ramah kantong.",
  },
  {
    id: "burjomapan",
    name: "Burjo Mapan",
    type: "mahasiswa",
    img: "https://awsimages.detik.net.id/community/media/visual/2022/12/26/menu-makanan-di-warmindo-jogja_169.jpeg?w=650",
    rating: 4.7,
    price: "Rp 1 - Rp 9.000",
    hours: "18.00 - 02.00",
    address: "Kompleks Kampus, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Burjo+Mapan+Tembalang",
    desc: "Warung burjo legendaris, pilihan pas buat begadang, menu praktis dan murah.",
  },
  {
    id: "warmindo",
    name: "Warmindo Kuning",
    type: "mahasiswa",
    img: "https://i.pinimg.com/1200x/b8/ce/2c/b8ce2c7d1ab7750c4a702ba2131e41a4.jpg",
    rating: 4.6,
    price: "Rp 1 - Rp 10.000",
    hours: "17.00 - 01.00",
    address: "Jl. Kuning, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Warmindo+Kuning+Tembalang",
    desc: "Indomie spesial dengan topping melimpah, rasa creamy dan gurih cocok anak kos.",
  },
  {
    id: "kharisma",
    name: "Ayam Geprek Kharisma",
    type: "mahasiswa",
    img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/8b9cb910-19df-4dea-9b2b-82a93fc032a5_Go-Biz_20220119_192817.jpeg",
    rating: 4.5,
    price: "Rp 1 - Rp 13.000",
    hours: "11.00 - 23.00",
    address: "Jl. Kharisma No.5, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Ayam+Geprek+Kharisma+Tembalang",
    desc: "Ayam geprek pedas dengan sambal khas, banyak level pedas untuk dipilih.",
  },
  {
    id: "penyetan",
    name: "Penyetan Bu Nas",
    type: "mahasiswa",
    img: "https://i.pinimg.com/736x/fc/0c/3b/fc0c3b51b560d6049f811271e645ef35.jpg",
    rating: 4.3,
    price: "Rp 1 - Rp 12.000",
    hours: "10.00 - 21.00",
    address: "Jl. Nas No.3, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Penyetan+Bu+Nas+Tembalang",
    desc: "Masakan penyetan rumahan, sambal segar dan lauk sederhana yang bikin nagih.",
  },
  {
    id: "sotos",
    name: "Soto Ayam Lamongan Cak Rul",
    type: "mahasiswa",
    img: "https://i.pinimg.com/736x/81/41/0a/81410a1a0dbdee51d1f5688b3cc823fa.jpg",
    rating: 4.6,
    price: "Rp 1 - Rp 11.000",
    hours: "06.00 - 12.00",
    address: "Jl. Rul, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Soto+Ayam+Lamongan+Cak+Rul+Tembalang",
    desc: "Soto kaldu bening dengan suwiran ayam khas Lamongan, pas buat sarapan.",
  },
  {
    id: "miegacoan",
    name: "Mie Gacoan Tembalang",
    type: "mahasiswa",
    img: "https://i.pinimg.com/736x/23/e3/6f/23e36faf4f47c0ee7eb342d4a49d1bfc.jpg",
    rating: 4.4,
    price: "Rp 1 - Rp 14.000",
    hours: "17.00 - 01.00",
    address: "Jl. Gacoan, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Mie+Gacoan+Tembalang",
    desc: "Mie pedas populer, porsi besar dan variasi level pedas.",
  },
  {
    id: "bakso",
    name: "Bakso Pak Diran",
    type: "mahasiswa",
    img: "https://i.pinimg.com/736x/f7/6c/93/f76c93a3a23c2666e107ada4c4f33aec.jpg",
    rating: 4.7,
    price: "Rp 1 - Rp 10.000",
    hours: "10.00 - 22.00",
    address: "Jl. Diran, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Bakso+Pak+Diran+Tembalang",
    desc: "Bakso kenyal dengan kuah gurih dan racikan bumbu tradisional.",
  },
  {
    id: "soto2",
    name: "Soto Ayam Khas Semarang",
    type: "mahasiswa",
    img: "https://i.pinimg.com/736x/e1/7e/57/e17e57ca90184a6cc0b366abf9d34645.jpg",
    rating: 4.4,
    price: "Rp 12.000",
    hours: "06.00 - 13.00",
    address: "Jl. Semarang, Tembalang",
    maps: "https://www.google.com/maps/search/?api=1&query=Soto+Ayam+Khas+Semarang+Tembalang",
    desc: "Soto Semarang berkaldu, pelengkap koya & rempah kuat.",
  },
];

// DOM refs
const cardsWrap = document.getElementById("cards");
const favoritesWrap = document.getElementById("favorites");
const restoSelect = document.getElementById("restoSelect");
const searchInput = document.getElementById("search");
const filterType = document.getElementById("filterType");

// detail refs
const detailSection = document.getElementById("detailSection");
const detailMainImg = document.getElementById("detail_main_img");
const detailName = document.getElementById("detail_name");
const detailPrice = document.getElementById("detail_price");
const detailHours = document.getElementById("detail_hours");
const detailRating = document.getElementById("detail_rating");
const detailDesc = document.getElementById("detail_desc");
const detailAddress = document.getElementById("detail_address");
const detailMapsBtn = document.getElementById("detail_maps_btn");
const detailSimilarWrap = document.getElementById("detail_similar");
const detailBackBtn = document.getElementById("detail_back_btn");

// sections to hide/show
const sectionsToHide = ["home", "rekom", "menu", "dashboard", "about"];

/* ===========================
   RENDER CARDS
=========================== */
function renderCards(list) {
  cardsWrap.innerHTML = "";
  list.forEach((r) => {
    const card = document.createElement("div");
    card.className = "card glass";
    card.setAttribute("data-id", r.id);

    card.innerHTML = `
      <img src="${r.img}" alt="${r.name}" />
      <div class="card-body">
        <h4 class="text-lg font-bold mb-1">${r.name}</h4>
        <p class="text-sm opacity-80">${r.price} • ⭐ ${r.rating}</p>
        <p class="text-sm opacity-70 mt-2">${r.hours}</p>
        <div class="mt-3 flex items-center gap-2">
          <button class="btn btn-outline btn-detail">Detail</button>
          <a class="btn btn-ghost btn-maps" href="${r.maps}" target="_blank">
            <i class="fa-solid fa-map-pin"></i>
          </a>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      const isMaps = e.target.closest(".btn-maps");
      if (isMaps) return;
      openDetail(r.id);
    });

    cardsWrap.appendChild(card);
  });
}

/* ===========================
   RENDER FAVORITES
=========================== */
function renderFavorites() {
  favoritesWrap.innerHTML = "";
  const favs = restaurants.filter((r) => r.type === "mahasiswa").slice(0, 6);

  favs.forEach((r) => {
    const d = document.createElement("div");
    d.className = "card p-4 glass";
    d.innerHTML = `
      <img src="${r.img}" class="rounded-xl mb-3"/>
      <div class="card-body">
        <h4 class="font-bold">${r.name}</h4>
        <p class="text-sm opacity-80">${r.price} • ⭐ ${r.rating}</p>
        <div class="mt-3 flex gap-2">
          <button class="btn btn-outline btn-detail-small">Detail</button>
          <a class="btn btn-ghost btn-maps-small" href="${r.maps}" target="_blank">
            <i class="fa-solid fa-map-pin"></i>
          </a>
        </div>
      </div>
    `;

    d.addEventListener("click", (e) => {
      const isMaps = e.target.closest(".btn-maps-small");
      if (isMaps) return;
      openDetail(r.id);
    });

    favoritesWrap.appendChild(d);
  });
}

/* ===========================
   POPULATE SELECT
=========================== */
restaurants.forEach((r) => {
  const opt = document.createElement("option");
  opt.value = r.id;
  opt.text = r.name;
  restoSelect.appendChild(opt);
});

/* Initial render */
renderCards(restaurants);
renderFavorites();

/* ===========================
   SEARCH + FILTER
=========================== */
function applyFilter() {
  const q = searchInput.value.trim().toLowerCase();
  const t = filterType.value;

  const filtered = restaurants.filter((r) => {
    if (t !== "all" && r.type !== t) return false;
    return (
      r.name.toLowerCase().includes(q) ||
      (r.price || "").toLowerCase().includes(q)
    );
  });

  renderCards(filtered);
}

searchInput.addEventListener("input", applyFilter);
filterType.addEventListener("change", applyFilter);

/* ===========================
   CHART.JS
=========================== */
const barCtx = document.getElementById("barChart").getContext("2d");
const pieCtx = document.getElementById("pieChart").getContext("2d");
let barChart = null,
  pieChart = null;

function updateChartsById(id) {
  const r = restaurants.find((x) => x.id === id);
  if (!r) return;

  const salesMap = {
    nasmafia: [30, 40, 50, 60, 55],
    bebekslamet: [20, 25, 30, 35, 30],
    ayambakar: [10, 15, 20, 25, 22],
    satekempleng: [15, 20, 24, 30, 28],
    burjomapan: [40, 45, 50, 55, 60],
    warmindo: [35, 40, 45, 50, 52],
    kharisma: [25, 30, 35, 40, 38],
    penyetan: [18, 22, 25, 27, 26],
    sotos: [20, 25, 30, 28, 32],
    miegacoan: [30, 36, 40, 45, 44],
    bakso: [28, 32, 36, 40, 39],
    soto2: [22, 26, 30, 34, 33],
  };

  const aspectScores = [
    parseFloat(r.rating.toFixed(1)),
    Math.max(1, Math.round((r.rating - 0.3) * 10) / 10),
    Math.max(1, Math.round((r.rating + 0.2) * 10) / 10),
    Math.max(1, Math.round((r.rating - 0.1) * 10) / 10),
  ];

  const labels = ["Rating", "Porsi", "Harga", "Rasa"];

  if (barChart) barChart.destroy();
  barChart = new Chart(barCtx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: r.name,
          data: aspectScores,
          backgroundColor: "rgba(124,58,237,0.85)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true, max: 5 } },
    },
  });

  if (pieChart) pieChart.destroy();
  pieChart = new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: ["Recommended", "Suka", "Biasa", "Kurang"],
      datasets: [
        {
          data: [45, 30, 15, 10],
          backgroundColor: ["#7c3aed", "#a78bfa", "#f472b6", "#fca5a5"],
        },
      ],
    },
    options: { responsive: true },
  });

  document.getElementById(
    "insight"
  ).innerText = `${r.name} biasanya ramai pada jam ${r.hours}. Harga: ${r.price}. Rating: ${r.rating}`;
}

/* initial chart */
updateChartsById(restaurants[0].id);

restoSelect.addEventListener("change", (e) => updateChartsById(e.target.value));

/* ===========================
   OPEN DETAIL PAGE
=========================== */
function openDetail(id) {
  const r = restaurants.find((x) => x.id === id);
  if (!r) return;

  detailMainImg.src = r.img;
  detailName.innerText = r.name;
  detailPrice.innerText = r.price;
  detailHours.innerText = r.hours;
  detailRating.innerText = "⭐ " + r.rating;
  detailDesc.innerText = r.desc || "Rasakan " + r.name;
  detailAddress.innerText = r.address;
  detailMapsBtn.href = r.maps;

  detailSimilarWrap.innerHTML = "";
  const similar = restaurants.filter((x) => x.id !== r.id).slice(0, 3);

  similar.forEach((s) => {
    const a = document.createElement("a");
    a.className =
      "block similar-card rounded-xl overflow-hidden glass p-0 hover:scale-105 transition";
    a.href = "#";
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      openDetail(s.id);
    });

    a.innerHTML = `
      <img src="${s.img}" class="w-full similar-img"/>
      <div class="p-3">
        <h5 class="font-semibold">${s.name}</h5>
        <p class="text-sm opacity-70">${s.price} • ⭐ ${s.rating}</p>
      </div>
    `;

    detailSimilarWrap.appendChild(a);
  });

  sectionsToHide.forEach((sec) =>
    document.getElementById(sec).classList.add("hidden-section")
  );
  detailSection.classList.remove("hidden-section");

  window.scrollTo({ top: 0, behavior: "smooth" });

  restoSelect.value = r.id;
  updateChartsById(r.id);
}

/* BACK BUTTON */
detailBackBtn.addEventListener("click", () => {
  detailSection.classList.add("hidden-section");
  sectionsToHide.forEach((sec) =>
    document.getElementById(sec).classList.remove("hidden-section")
  );

  const rekom = document.getElementById("rekom");
  rekom.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ENTER TO SEARCH */
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") applyFilter();
});

/* NAV BUTTONS SCROLL */
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const t = btn.getAttribute("data-target");
    const el = document.getElementById(t);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
});

/* MOBILE MENU (SIMPLE PROMPT) */
document.getElementById("openMobile").addEventListener("click", () => {
  const opt = prompt("Navigate to: home / rekom / menu / dashboard / about");
  if (opt) {
    const el = document.getElementById(opt.trim());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
});

/* Final re-render */
renderCards(restaurants);
renderFavorites();
