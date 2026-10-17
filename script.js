/* ========= DATA ========= */

// Anggota kelas (sesuai absen)
const anggota = [
  { no: "01", nama: "Aida Azifah Anwar" },
  { no: "02", nama: "Alvaro Soleh Nugroho" },
  { no: "03", nama: "Annas Dharmawan" },
  { no: "04", nama: "Apriliana Dwi Saputri" },
  { no: "05", nama: "Ardhian Imam Wicaksono" },
  { no: "06", nama: "Arya Bagus Setyawan" },
  { no: "07", nama: "Baihaqi Villabany" },
  { no: "08", nama: "Bayu Esa Nugraha" },
  { no: "09", nama: "Besta Narindra Febyan Prihantoro" },
  { no: "10", nama: "Carissa Putri" },
  { no: "11", nama: "Dewi Masyithoh" },
  // Nomor 12 adalah Ditra (Ketua Kelas, tidak masuk daftar ini)
  { no: "13", nama: "Eky Hardiansyah" },
  { no: "14", nama: "Fadhilatul Laili Fauziyah" },
  { no: "15", nama: "Fadila Eka Pertiwi" },
  { no: "16", nama: "Faisal Dwi Prasetya" },
  { no: "17", nama: "Fanni Meiyalianti Rukmana" },
  { no: "18", nama: "Gery Wibowo" },
  { no: "19", nama: "Gilang Prasetyo" },
  { no: "20", nama: "Kumoro Tunggul Ismoyo" },
  { no: "21", nama: "Nailal Muna" },
  { no: "22", nama: "Naura Talita" },
  { no: "23", nama: "Nayla Novly Ashifa" },
  { no: "24", nama: "Nugroho Sansoyo Jati" },
  { no: "25", nama: "Rafka Hilmi Rabbani" },
  { no: "26", nama: "Raka Adji Santoso" },
  { no: "27", nama: "Rava Fachri Akbar" },
  { no: "28", nama: "Razita Nur Amalina" },
  { no: "29", nama: "Reysila Wulan Safitri" },
  { no: "30", nama: "Rifki Amalia Putri" },
  { no: "31", nama: "Risky Raditia" },
  // Nomor 32 adalah Rizka (Wakil Ketua, tidak masuk daftar ini)
  { no: "33", nama: "Shakila Shifa Anggariza" },
  { no: "34", nama: "Sivana Keysha Dwi Puspita Sari" },
  { no: "35", nama: "Sujiawati Putri" }
];

// Guru pembimbing
const guru = {
  21: "Lilik Handayani, S.Pd., M.Pd.",
  18: "Tri Anjani, S.Pd",
  26: "Tiara Mirzetta Anugrahani, S.Pd., MM.",
  32: "Wahyu Fajaryanto, S.Pd. Gr.",
  10: "Suhartini, S.Pd., M.Pd.",
  4: "Arfan Wibowo, S.Pd.",
  17: "Saridal, S.Pd.",
  52: "Imam Kusuma Dewi, S.Pd.",
  29: "Riwanti, S.Pd.",
  8: "Syamsi Widiyani, S.Pd., M.Pd.",
  42: "Ganang Anggara Ade Putra, S.Pd.",
  20: "Kartikaningsih, S.Sn.",
  14: "Erna Widiastuti, S.Pd.",
  27: "Lia Tri Utami, S.T. Gr.",
  40: "Dyah Ayu Nur Cahyanti, S.T.",
  28: "Anita Puspitasari, S.T. Gr.",
  36: "Anni Amirotun Najhah, S.Pd.I. Gr."
};

// Jadwal: [nama mapel, kode guru]
const jadwal = {
  Senin: [["SJ", 29], ["DTKI", 27], ["IPAS", 17], ["B. Inggris", 10]],
  Selasa: [["PJOK", 4], ["IPAS", 17], ["MPK KA", 40], ["B. Inggris", 10]],
  Rabu: [["PPKN", 21], ["B. Jawa", 20], ["DTKI", 8], ["MTK", 14], ["B. Indo", 42]],
  Kamis: [["Inf", 52], ["SB", 20], ["BK", 18], ["DTKI", 32]],
  Jumat: [["B. Indo", 42], ["PABP", 36], ["DTKI", 28], ["MTK", 14]]
};

// Playlist lagu — tambahkan tanpa menata, tinggal tambah baris
const playlist = [
  { judul: "Jendela Kelas 1", file: "m1.mp3" },
  { judul: "Whatever", file: "m2.mp3" }
];

// Foto kelas — tambahkan nama file saja di sini
const fotoList = ["1.jpg", "2.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

const anggotaGrid = document.getElementById("anggotaGrid");
anggotaGrid.innerHTML = anggota
  .map((siswa) => `
    <div class="anggota-item">
      <span class="anggota-no">${siswa.no}</span>
      <span>${siswa.nama}</span>
    </div>`)
  .join("");

/* ========= RENDER JADWAL + GURU ========= */
const jadwalGrid = document.getElementById("jadwalGrid");
jadwalGrid.innerHTML = Object.entries(jadwal)
  .map(([hari, items]) => `
    <div class="hari-card">
      <h5>${hari}</h5>
      ${items.map(([mapel, kode]) => `
        <div class="pelajaran">
          <span class="mapel">${mapel}</span>
          <span class="guru">${guru[kode] || "Guru " + kode}</span>
        </div>`).join("")}
    </div>`)
  .join("");

/* ========= RENDER GALERI ========= */
const galeriGrid = document.getElementById("galeriGrid");
galeriGrid.innerHTML = fotoList
  .map((file) => `
    <figure class="galeri-item">
      <img src="${file}" alt="Foto kelas TKI 2" loading="lazy" />
    </figure>`)
  .join("");

/* ========= RENDER PLAYLIST ========= */
/* ========= RENDER PLAYLIST ========= */
const playlistList = document.getElementById("playlistList");

playlistList.innerHTML = playlist
  .map((item, index) => `
    <li class="playlist-item">
      <div class="track-info">
        <span class="track-title">${item.judul}</span>
        <span class="track-time" id="time-${index}">00:00 / 00:00</span>
      </div>
      
      <div class="audio-controls">
        <!-- Tombol Mundur 5 Detik -->
        <button class="skip-btn" id="rewind-${index}" aria-label="Mundur 5 detik">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" fill="currentColor"/>
          </svg>
        </button>

        <!-- Tombol Play/Pause -->
        <button class="play-btn" id="btn-${index}" aria-label="Putar lagu">
          <svg class="icon-play" viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
          <svg class="icon-pause" viewBox="0 0 24 24" width="20" height="20" style="display:none;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/></svg>
        </button>

        <!-- Tombol Maju 5 Detik -->
        <button class="skip-btn" id="forward-${index}" aria-label="Maju 5 detik">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M13 6v12l8.5-6L13 6zM4 18l8.5-6L4 6v12z" fill="currentColor"/>
          </svg>
        </button>
        
        <!-- Progress Bar -->
        <div class="progress-container" id="prog-container-${index}">
          <div class="progress-bar" id="prog-bar-${index}"></div>
        </div>
      </div>

      <!-- Audio asli disembunyikan -->
      <audio id="audio-${index}" src="${item.file}" preload="metadata"></audio>
    </li>`)
  .join("");

// Logika Pemutar Lagu Kustom
document.querySelectorAll(".playlist-item").forEach((item, index) => {
  const audio = document.getElementById(`audio-${index}`);
  const btn = document.getElementById(`btn-${index}`);
  const btnRewind = document.getElementById(`rewind-${index}`);
  const btnForward = document.getElementById(`forward-${index}`);
  const iconPlay = btn.querySelector(".icon-play");
  const iconPause = btn.querySelector(".icon-pause");
  const progBar = document.getElementById(`prog-bar-${index}`);
  const progContainer = document.getElementById(`prog-container-${index}`);
  const timeText = document.getElementById(`time-${index}`);

  // Format waktu (menit:detik)
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const m = Math.floor(time / 60).toString().padStart(2, "0");
    const s = Math.floor(time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Update UI saat lagu diputar
  audio.addEventListener("timeupdate", () => {
    const current = audio.currentTime;
    const duration = audio.duration;
    progBar.style.width = `${(current / duration) * 100}%`;
    timeText.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
  });

  // Munculkan durasi awal saat dimuat
  audio.addEventListener("loadedmetadata", () => {
    timeText.textContent = `00:00 / ${formatTime(audio.duration)}`;
  });

  // Klik tombol Play/Pause
  btn.addEventListener("click", () => {
    // Hentikan lagu lain jika sedang diputar
    document.querySelectorAll("audio").forEach((a, i) => {
      if (i !== index) {
        a.pause();
        document.getElementById(`btn-${i}`).querySelector(".icon-play").style.display = "block";
        document.getElementById(`btn-${i}`).querySelector(".icon-pause").style.display = "none";
      }
    });

    if (audio.paused) {
      audio.play();
      iconPlay.style.display = "none";
      iconPause.style.display = "block";
    } else {
      audio.pause();
      iconPlay.style.display = "block";
      iconPause.style.display = "none";
    }
  });

  // Klik tombol Mundur 5 Detik
  btnRewind.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
  });

  // Klik tombol Maju 5 Detik
  btnForward.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
  });

  // Fitur geser (seek) saat progress bar diklik
  progContainer.addEventListener("click", (e) => {
    const rect = progContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pos * audio.duration;
  });
});

/* ========= MENU ========= */
const hamburger = document.getElementById("hamburger");
const menuPanel = document.getElementById("menuPanel");
const menuScrim = document.getElementById("menuScrim");
const menuClose = document.getElementById("menuClose");

function setMenu(open) {
  menuPanel.classList.toggle("open", open);
  hamburger.classList.toggle("open", open);
  menuScrim.classList.toggle("show", open);
  hamburger.setAttribute("aria-expanded", open);
  menuPanel.setAttribute("aria-hidden", !open);
}

hamburger.addEventListener("click", () => setMenu(!menuPanel.classList.contains("open")));
menuClose.addEventListener("click", () => setMenu(false));
menuScrim.addEventListener("click", () => setMenu(false));

document.querySelectorAll("[data-nav]").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

/* ========= PLAYLIST MODAL ========= */
const playlistModal = document.getElementById("playlistModal");
const openPlaylist = document.getElementById("openPlaylist");
const playlistClose = document.getElementById("playlistClose");

function setPlaylist(open) {
  playlistModal.classList.toggle("open", open);
  playlistModal.setAttribute("aria-hidden", !open);
  if (open) setMenu(false);
}

openPlaylist.addEventListener("click", () => setPlaylist(true));
playlistClose.addEventListener("click", () => setPlaylist(false));
playlistModal.addEventListener("click", (e) => {
  if (e.target === playlistModal) setPlaylist(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setPlaylist(false);
    setMenu(false);
  }
});

/* ========= LATAR KIMIA BERGERAK ========= */
const labBg = document.getElementById("labBg");

const unsurTunggal = ["H", "O", "C", "N", "Ca", "Na", "K", "Fe", "Mg", "Cl"];
const senyawa = ["H2O", "CO2", "NaCl", "CaCO3", "CH4", "H2SO4", "NH3"];

// Fungsi pembantu untuk menyebar posisi secara merata (sistem grid)
// Menggunakan array koordinat agar objek tidak saling tumpang tindih
const areaPosisi = [
  { left: 10, top: 15 }, { left: 35, top: 25 }, { left: 65, top: 10 }, { left: 85, top: 30 },
  { left: 15, top: 50 }, { left: 40, top: 65 }, { left: 70, top: 55 }, { left: 90, top: 75 },
  { left: 10, top: 85 }, { left: 50, top: 90 }, { left: 75, top: 88 }, { left: 25, top: 75 },
  { left: 55, top: 40 }, { left: 80, top: 50 }, { left: 30, top: 10 }, { left: 60, top: 80 }
];

function ambilPosisi(index) {
  // Mengambil posisi dari daftar, dan mengacaknya sedikit agar tidak terlalu kaku
  const pos = areaPosisi[index % areaPosisi.length];
  const acakKiri = pos.left + (Math.random() * 6 - 3);
  const acakAtas = pos.top + (Math.random() * 6 - 3);
  return {
    left: acakKiri + "vw",
    top: acakAtas + "vh"
  };
}

function buatLatar() {
  const frag = document.createDocumentFragment();
  
  // Jumlah objek dikurangi agar layar tidak terlalu ramai
  const totalAtom = 3;
  const totalTabung = 2;
  const totalErlen = 2;
  const totalBeaker = 2;
  const totalUnsur = 6; // Kita ambil 6 unsur acak saja
  
  let posisiIndex = 0;

  // 1. Render Atom
  for (let i = 0; i < totalAtom; i++) {
    const atom = document.createElement("div");
    atom.className = "atom";
    const size = 40 + Math.random() * 30; // Ukuran sedikit diseragamkan
    atom.style.width = size + "px";
    atom.style.height = size + "px";
    
    const pos = ambilPosisi(posisiIndex++);
    atom.style.left = pos.left;
    atom.style.top = pos.top;
    atom.style.animationDelay = (-Math.random() * 12) + "s";
    frag.appendChild(atom);
  }

  // 2. Render Tabung Reaksi
  for (let i = 0; i < totalTabung; i++) {
    const tabung = document.createElement("div");
    tabung.className = "tabung";
    
    const pos = ambilPosisi(posisiIndex++);
    tabung.style.left = pos.left;
    tabung.style.top = pos.top;
    tabung.style.animationDelay = (-Math.random() * 14) + "s";
    frag.appendChild(tabung);
  }

  // 3. Render Labu Erlenmeyer
  for (let i = 0; i < totalErlen; i++) {
    const erlen = document.createElement("div");
    erlen.className = "erlenmeyer";
    erlen.innerHTML = `
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect x="40" y="5" width="20" height="20" rx="2" />
        <path d="M 40 25 L 10 85 Q 5 98 20 98 L 80 98 Q 95 98 90 85 L 60 25" />
        <line x1="32" y1="5" x2="68" y2="5" stroke-linecap="round"/>
      </svg>
    `;

    const pos = ambilPosisi(posisiIndex++);
    erlen.style.left = pos.left;
    erlen.style.top = pos.top;
    erlen.style.animationDelay = (-Math.random() * 16) + "s";
    frag.appendChild(erlen);
  }

  // 4. Render Gelas Kimia (Beaker)
  for (let i = 0; i < totalBeaker; i++) {
    const beaker = document.createElement("div");
    beaker.className = "beaker";
    
    const pos = ambilPosisi(posisiIndex++);
    beaker.style.left = pos.left;
    beaker.style.top = pos.top;
    beaker.style.animationDelay = (-Math.random() * 13) + "s";
    frag.appendChild(beaker);
  }

  // 5. Render Tulisan Unsur (Diacak agar bervariasi)
  const semuaUnsur = [...unsurTunggal, ...senyawa];
  // Mengacak urutan array
  semuaUnsur.sort(() => Math.random() - 0.5);

  for (let i = 0; i < totalUnsur; i++) {
    const el = document.createElement("div");
    const teks = semuaUnsur[i];
    // Cek apakah teks mengandung angka (senyawa) atau tidak (unsur tunggal)
    const isGabung = /\d/.test(teks); 
    
    el.className = "unsur" + (isGabung ? " gabung" : "");
    el.textContent = teks;
    
    const pos = ambilPosisi(posisiIndex++);
    el.style.left = pos.left;
    el.style.top = pos.top;
    el.style.animationDelay = (-Math.random() * 12) + "s";
    el.style.fontSize = (1 + Math.random() * 0.3) + "rem"; // Ukuran font diseragamkan
    frag.appendChild(el);
  }

  labBg.appendChild(frag);
}

buatLatar();

/* ========= ANIMASI SAAT DI-SCROLL (BISA BERULANG) ========= */
document.addEventListener("DOMContentLoaded", () => {
  // Daftar elemen yang ingin diberi animasi
  const elemenAnimasi = document.querySelectorAll(
    ".hero, .section, .person, .hari-card, .galeri-item, .motivasi-text"
  );

  // Tambahkan class awal ke semua elemen
  elemenAnimasi.forEach((el) => el.classList.add("scroll-anim"));

  // Konfigurasi Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "-10% 0px -10% 0px", // Muncul sedikit lebih awal sebelum pas di tengah
    threshold: 0.1 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Jika masuk layar: munculkan
        entry.target.classList.add("show");
      } else {
        // Jika keluar layar: sembunyikan lagi agar bisa beranimasi ulang
        entry.target.classList.remove("show");
      }
    });
  }, observerOptions);

  // Pasang observer ke setiap elemen
  elemenAnimasi.forEach((el) => observer.observe(el));
});