// ============================================================
// ✏️ EDITE AQUI — DADOS DA ALUNA
// ============================================================

const STUDENT_NAME = "Cristiane";

// WhatsApp opcional para botão/link futuro
// Exemplo: "5521999999999"
const WHATSAPP_NUMBER = "";

// ============================================================
// ✏️ EDITE AQUI — SEMANAS DA ALUNA
// Cristiane tem apenas 2 semanas agora.
// Para adicionar uma semana nova, copie um bloco inteiro { ... }
// e cole depois da semana 2, separando com vírgula.
// ============================================================

const WEEKS = [
  {
    number: 1,
    title: "To Be",
    focus: "Aprender a estrutura de frases de ser/estar na afirmativa. Não se preocupe com perfeição — ouse falar!",

    // ✏️ ADICIONE PDFS AQUI
    pdfs: [
      { label: "To Be – Semana 1", url: "semana1.pdf" }
    ],

    // ✏️ ADICIONE EXERCÍCIOS AQUI
    exercises: [
      "Pratique os exercícios do PDF abaixo",
      "Escreva 3 frases apresentando você em inglês no seu caderno"
    ],

    // ✏️ ADICIONE ÁUDIOS AQUI
    audios: [
      // Quando tiver arquivo:
      // { label: "Prática de pronúncia", url: "audio-semana1.mp3" }

      // Quando o áudio for enviado pelo WhatsApp:
      { label: "Pronúncia de 'th' — enviado pelo WhatsApp", url: "" }
    ],

    // ✏️ ADICIONE LINKS AQUI
    links: [
      { label: "BBC Learning English – greetings", url: "https://www.bbc.co.uk/learningenglish" }
    ],

    // ✏️ ADICIONE VÍDEOS AQUI
    videos: []
  },

  {
    number: 2,
    title: "Daily Routines",
    focus: "Praticar frases simples sobre rotina e começar a falar pequenas informações do dia a dia.",

    pdfs: [
      // { label: "Daily Routines – Semana 2", url: "semana2.pdf" }
    ],

    exercises: [
      "Complete os exercícios da Semana 2 no caderno",
      "Grave um áudio curto falando 3 frases sobre sua rotina"
    ],

    audios: [
      { label: "Modelo de rotina — enviado pelo WhatsApp", url: "" }
    ],

    links: [],

    videos: []
  }

  // ============================================================
  // ✏️ PARA ADICIONAR SEMANA 3:
  // Copie este modelo abaixo e cole antes do fechamento do array.
  //
  // ,
  // {
  //   number: 3,
  //   title: "Family",
  //   focus: "Praticar vocabulário de família e frases com he/she/they.",
  //   pdfs: [
  //     { label: "Family – Semana 3", url: "semana3.pdf" }
  //   ],
  //   exercises: [
  //     "Traduza as frases do PDF",
  //     "Grave 3 frases falando sobre sua família"
  //   ],
  //   audios: [],
  //   links: [],
  //   videos: []
  // }
  // ============================================================
];

// ============================================================
// ⬇️ A PARTIR DAQUI NÃO PRECISA MEXER
// ============================================================

const iconMap = {
  pdf: "▣",
  audio: "◖",
  exercise: "✎",
  link: "⌁",
  video: "▷"
};

function hasItems(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

function renderGrid() {
  const grid = document.getElementById("weeksGrid");

  grid.innerHTML = WEEKS.map((week, index) => {
    const icons = `
      ${hasItems(week.pdfs) ? `<span class="resource-icon pdf">${iconMap.pdf}</span>` : ""}
      ${hasItems(week.audios) ? `<span class="resource-icon audio">${iconMap.audio}</span>` : ""}
      ${hasItems(week.exercises) ? `<span class="resource-icon exercise">${iconMap.exercise}</span>` : ""}
      ${hasItems(week.links) ? `<span class="resource-icon link">${iconMap.link}</span>` : ""}
      ${hasItems(week.videos) ? `<span class="resource-icon video">${iconMap.video}</span>` : ""}
    `;

    return `
      <article class="week-card" onclick="openModal(${index})">
        <div class="week-head">
          <p class="week-number">Semana ${week.number}</p>
          <h2 class="week-title">${week.title}</h2>
        </div>

        <div class="week-body">
          <div class="icon-row">${icons}</div>
          <p class="open-week">Abrir semana →</p>
        </div>
      </article>
    `;
  }).join("");
}

function openModal(index) {
  const week = WEEKS[index];

  document.getElementById("modalWeekLabel").textContent = `Semana ${week.number}`;
  document.getElementById("modalTitle").textContent = week.title;
  document.getElementById("modalFocus").textContent = week.focus;

  const body = document.getElementById("modalBody");
  body.innerHTML = `
    ${renderPdfs(week.pdfs)}
    ${renderExercises(week.exercises)}
    ${renderAudios(week.audios)}
    ${renderLinks(week.links)}
    ${renderVideos(week.videos)}

    <div class="yas-tip">
      ✨ <strong>Dica da YV:</strong> Pratique todos os dias um pouco. Consistência é o que te leva à fluência.
    </div>
  `;

  document.getElementById("overlay").classList.add("open");
}

function renderPdfs(pdfs) {
  if (!hasItems(pdfs)) return "";

  return `
    <div class="resource-section">
      <h3>${iconMap.pdf} PDFs</h3>
      <div class="resource-list">
        ${pdfs.map(pdf => `
          <div class="resource-item">
            <span>${pdf.label}</span>
            <div>
              <a href="${pdf.url}" target="_blank">Visualizar</a>
              <a href="${pdf.url}" download class="download-btn">Baixar</a>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderExercises(exercises) {
  if (!hasItems(exercises)) return "";

  return `
    <div class="resource-section">
      <h3>${iconMap.exercise} Exercícios</h3>
      <ul class="exercise-list">
        ${exercises.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderAudios(audios) {
  if (!hasItems(audios)) return "";

  return `
    <div class="resource-section">
      <h3>${iconMap.audio} Áudios</h3>
      <div class="resource-list">
        ${audios.map(audio => `
          <div class="resource-item">
            <span>${audio.label}</span>
            ${
              audio.url
                ? `<audio controls preload="none"><source src="${audio.url}"></audio>`
                : `<span>Ouvir no WhatsApp</span>`
            }
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderLinks(links) {
  if (!hasItems(links)) return "";

  return `
    <div class="resource-section">
      <h3>${iconMap.link} Links</h3>
      <div class="resource-list">
        ${links.map(link => `
          <div class="resource-item">
            <span>${link.label}</span>
            <a href="${link.url}" target="_blank">Abrir link ↗</a>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderVideos(videos) {
  if (!hasItems(videos)) {
    return `
      <div class="resource-section">
        <h3>${iconMap.video} Vídeos</h3>
        <p style="font-size:.9rem;color:#756A78;">Nenhum vídeo disponível nesta semana.</p>
      </div>
    `;
  }

  return `
    <div class="resource-section">
      <h3>${iconMap.video} Vídeos</h3>
      <div class="resource-list">
        ${videos.map(video => `
          <div class="resource-item">
            <span>${video.label}</span>
            <a href="${video.url}" target="_blank">Assistir ↗</a>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function closeModal() {
  document.getElementById("overlay").classList.remove("open");
}

document.getElementById("overlay").addEventListener("click", function(event) {
  if (event.target === this) closeModal();
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") closeModal();
});

let startY = 0;

document.querySelector('.modal').addEventListener('touchstart', e => {
  startY = e.touches[0].clientY;
});

document.querySelector('.modal').addEventListener('touchmove', e => {
  const currentY = e.touches[0].clientY;

  if (currentY - startY > 120) {
    closeModal();
  }
});

renderGrid();