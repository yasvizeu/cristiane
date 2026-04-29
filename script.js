// ============================================================
// ✏️ EDITE AQUI — DADOS DA ALUNA
// ============================================================

const WEEKS = [
  {
    number: 1,
    title: "To Be",
    focus: "Aprender a estrutura de frases de ser/estar na afirmativa. Não se preocupe com perfeição — ouse falar!",

    pdfs: [
      { label: "To Be – Semana 1", url: "https://drive.google.com/file/d/1Sy2vF5MsjdcpRLBHGqVCNOPtS8N5dBYf/view?usp=sharing" }
    ],

    exercises: [
      "Pratique os exercícios do PDF abaixo",
      "Escreva 3 frases apresentando você em inglês no seu caderno"
    ],

    // Com arquivo:   { label: "Nome", url: "audios/arquivo.mp3" }
    // Pelo WhatsApp: { label: "Nome — enviado pelo WhatsApp", url: "" }
    audios: [
      { label: "Pronúncia de 'th' — enviado pelo WhatsApp", url: "" }
    ],

    links: [
      { label: "BBC Learning English – greetings", url: "https://www.bbc.co.uk/learningenglish" }
    ],

    videos: [],

    // ✏️ ADICIONE VOCABULÁRIO AQUI
    // { word: "palavra em inglês", translation: "tradução em português" }
    vocabulary: [
      { word: "to be", translation: "ser / estar" },
      { word: "I am", translation: "eu sou / estou" },
      { word: "you are", translation: "você é / está" },
      { word: "she is", translation: "ela é / está" },
      { word: "we are", translation: "nós somos / estamos" },
      { word: "they are", translation: "eles são / estão" },
    ]
  },

  {
    number: 2,
    title: "Daily Routines",
    focus: "Praticar frases simples sobre rotina e começar a falar pequenas informações do dia a dia.",

    pdfs: [],

    exercises: [
      "Complete os exercícios da Semana 2 no caderno",
      "Grave um áudio curto falando 3 frases sobre sua rotina"
    ],

    audios: [
      { label: "Modelo de rotina — enviado pelo WhatsApp", url: "" }
    ],

    links: [],
    videos: [],

    vocabulary: [
      { word: "wake up", translation: "acordar" },
      { word: "daily routine", translation: "rotina diária" },
      { word: "in the morning", translation: "de manhã" },
      { word: "at night", translation: "à noite" },
    ]
  }

  // ============================================================
  // ✏️ PARA ADICIONAR UMA NOVA SEMANA, copie e cole este modelo
  // antes do ] acima, com vírgula depois da semana anterior:
  //
  // ,{
  //   number: 3,
  //   title: "Family",
  //   focus: "Vocabulário de família e frases com he/she/they.",
  //   pdfs:      [{ label: "Family – Semana 3", url: "pdfs/semana3.pdf" }],
  //   exercises: ["Faça os exercícios do PDF", "Grave 3 frases sobre sua família"],
  //   audios:    [],
  //   links:     [],
  //   videos:    [],
  //   vocabulary: [
  //     { word: "palavra", translation: "tradução" },
  //   ]
  // }
  // ============================================================
];

// ============================================================
// ⬇️ A PARTIR DAQUI NÃO PRECISA MEXER
// ============================================================

function hasContent(arr) {
  return Array.isArray(arr) && arr.filter(i => i && i.label).length > 0;
}

function renderGrid() {
  const grid = document.getElementById("weeksGrid");
  grid.innerHTML = WEEKS.map((w, i) => {
    const icons = [
      hasContent(w.pdfs)      ? '<span class="ricon ricon-pdf"  title="PDF">P</span>'  : '',
      hasContent(w.audios)    ? '<span class="ricon ricon-audio" title="Áudio">A</span>' : '',
      hasContent(w.exercises) ? '<span class="ricon ricon-exercise" title="Exercícios">E</span>' : '',
      hasContent(w.links)     ? '<span class="ricon ricon-link"  title="Links">L</span>' : '',
      hasContent(w.videos)    ? '<span class="ricon ricon-video" title="Vídeos">V</span>' : '',
    ].join('');

    return `
      <article class="week-card" onclick="openModal(${i})" tabindex="0"
               onkeydown="if(event.key==='Enter')openModal(${i})">
        <div class="card-head">
          <p class="card-number">Semana ${w.number}</p>
          <h2 class="card-title">${w.title}</h2>
        </div>
        <div class="card-body">
          <div class="card-icons">${icons}</div>
          <div class="card-cta">
            <span>Ver material</span>
            <span class="card-cta-arrow">→</span>
          </div>
        </div>
      </article>`;
  }).join('');
}

function openModal(index) {
  const w = WEEKS[index];
  document.getElementById("modalWeekLabel").textContent = `Semana ${w.number}`;
  document.getElementById("modalTitle").textContent     = w.title;
  document.getElementById("modalFocus").textContent     = w.focus || '';

  document.getElementById("modalBody").innerHTML = [
    renderPdfs(w.pdfs),
    renderExercises(w.exercises),
    renderAudios(w.audios),
    renderLinks(w.links),
    renderVideos(w.videos),
    renderVocabulary(w.vocabulary),
    `<div class="yas-tip"><strong>Dica da YV</strong>Pratique todos os dias um pouco. Consistência é o que te leva à fluência. ✦</div>`
  ].join('');

  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow = 'hidden';
}


function renderVocabulary(vocabulary) {
  const items = (vocabulary || []).filter(v => v.word);
  if (!items.length) return '';
  return `
    <div class="resource-section">
      <h3 class="res-title">Vocabulário</h3>
      <div class="vocab-grid">
        ${items.map((v, i) => `
          <div class="vocab-card" onclick="this.classList.toggle('flipped')" tabindex="0"
               onkeydown="if(event.key==='Enter')this.classList.toggle('flipped')">
            <div class="vocab-front">
              <span class="vocab-word">${v.word}</span>
              <span class="vocab-hint">toque para ver</span>
            </div>
            <div class="vocab-back">
              <span class="vocab-translation">${v.translation}</span>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function closeModal() {
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = '';
}

function renderPdfs(pdfs) {
  const items = (pdfs || []).filter(p => p.label);
  if (!items.length) return '';
  return `
    <div class="resource-section">
      <h3 class="res-title">PDFs</h3>
      <div class="res-list">
        ${items.map(p => `
          <div class="res-item">
            <span class="res-item-label">${p.label}</span>
            <div class="res-actions">
              <a href="${p.url}" target="_blank" class="btn-open">Abrir ↗</a>
              <a href="${p.url}" download class="btn-download">Baixar</a>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderExercises(exercises) {
  const items = (exercises || []).filter(Boolean);
  if (!items.length) return '';
  return `
    <div class="resource-section">
      <h3 class="res-title">Exercícios</h3>
      <ul class="exercise-list">
        ${items.map(e => `<li>${e}</li>`).join('')}
      </ul>
    </div>`;
}

function renderAudios(audios) {
  const items = (audios || []).filter(a => a.label);
  if (!items.length) return '';
  return `
    <div class="resource-section">
      <h3 class="res-title">Áudios</h3>
      <div class="res-list">
        ${items.map(a => a.url
          ? `<div class="res-item audio-item">
               <span class="res-item-label">${a.label}</span>
               <audio controls preload="none"><source src="${a.url}"></audio>
             </div>`
          : `<div class="res-item">
               <span class="res-item-label">${a.label}</span>
               <span class="via-whatsapp">via WhatsApp</span>
             </div>`
        ).join('')}
      </div>
    </div>`;
}

function renderLinks(links) {
  const items = (links || []).filter(l => l.label);
  if (!items.length) return '';
  return `
    <div class="resource-section">
      <h3 class="res-title">Links</h3>
      <div class="res-list">
        ${items.map(l => `
          <div class="res-item">
            <span class="res-item-label">${l.label}</span>
            <div class="res-actions">
              <a href="${l.url}" target="_blank" class="btn-open">Abrir ↗</a>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderVideos(videos) {
  const items = (videos || []).filter(v => v.label);
  if (!items.length) return '';
  return `
    <div class="resource-section">
      <h3 class="res-title">Vídeos</h3>
      <div class="res-list">
        ${items.map(v => `
          <div class="res-item">
            <span class="res-item-label">${v.label}</span>
            <div class="res-actions">
              <a href="${v.url}" target="_blank" class="btn-open">Assistir ↗</a>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

// Fechar clicando fora
document.getElementById("overlay").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

// Fechar com Esc
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// Swipe down para fechar no mobile
let touchStartY = 0;
document.querySelector(".modal") && document.addEventListener("touchstart", e => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
document.addEventListener("touchmove", e => {
  if (document.getElementById("overlay").classList.contains("open")) {
    if (e.touches[0].clientY - touchStartY > 100) closeModal();
  }
}, { passive: true });

renderGrid();
renderGlossary();

function renderGlossary() {
  const section = document.getElementById("glossarySection");
  if (!section) return;

  const all = [];
  WEEKS.forEach(w => {
    (w.vocabulary || []).filter(v => v.word).forEach(v => {
      all.push({ ...v, week: w.number, weekTitle: w.title });
    });
  });

  if (!all.length) {
    section.innerHTML = '<p class="glossary-empty">O glossário vai aparecer aqui conforme as semanas forem avançando. ✦</p>';
    return;
  }

  section.innerHTML = all.map(v => `
    <div class="glossary-row">
      <span class="glos-word">${v.word}</span>
      <span class="glos-trans">${v.translation}</span>
      <span class="glos-week-badge">Sem. ${v.week}</span>
    </div>`).join('');
}
