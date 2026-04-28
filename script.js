// ============================================================
//  ✏️  EDITE AQUI — DADOS DA ALUNA
// ============================================================

const WEEKS = [

  {
    number: 1,
    title: "To Be",        // título da semana
    exercises: [
      "Pratique os exercícios do PDF abaixo",
      "Escreva 3 frases apresentando você em inglês no seu caderno",
    ],
    pdfs: [
      // url pode ser caminho local (ex: "semana1.pdf") ou link do Google Drive / Dropbox
      { label: "To Be – Semana 1", url: "semana1.pdf" },
    ],
    audios: [
      // { label: "Texto descritivo", url: "https://link-do-audio.mp3" }
      { label: "Ouça: Pronúncia de 'th' (arquivo enviado no WhatsApp)", url: "" },
    ],
    links: [
      { label: "BBC Learning English – greetings", url: "https://www.bbc.co.uk/learningenglish" },
    ],
    videos: [
      // { label: "Nome do vídeo", url: "https://youtube.com/..." }
    ],
    yasNote: "Foco desta semana: aprender a estrutura de frases de ser/estar na afirmativa. Não se preocupe com perfeição, ouse falar! 💛",
  },

  {
    number: 2,
    title: "Daily Routines",
    exercises: [
      "Complete os exercícios 1 e 2 do PDF Semana 2",
      "Grave um áudio de 30 segundos descrevendo sua manhã em inglês",
    ],
    pdfs: [
      // { label: "Nome do PDF", url: "semana2.pdf" },
    ],
    audios: [
      { label: "Modelo de rotina (enviado no WhatsApp)", url: "" },
    ],
    links: [
      { label: "Quiz: Simple Present – British Council", url: "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-simple" },
    ],
    videos: [],
    yasNote: "Tente usar pelo menos 5 verbos diferentes ao descrever sua rotina.",
  },

  // ── ADICIONE MAIS SEMANAS AQUI ──
  // Basta copiar um bloco { number, title, exercises, audios, links, videos, yasNote }
  // e colar abaixo, separado por vírgula.

];

// ============================================================
//  ⬇️  A PARTIR DAQUI NÃO PRECISA MEXER
// ============================================================

function buildTag(type) {
  const map = {
    exercise: ['tag-exercise', '📝 Exercícios'],
    audio:    ['tag-audio',    '🎧 Áudios'],
    link:     ['tag-link',     '🔗 Links'],
    video:    ['tag-video',    '▶️ Vídeos'],
    pdf:      ['tag-pdf',      '📄 PDFs'],
  };
  const [cls, label] = map[type];
  return `<span class="tag ${cls}">${label}</span>`;
}

function renderGrid() {
  const grid = document.getElementById('weeksGrid');
  grid.innerHTML = WEEKS.map(w => {
    const tags = [
      w.exercises?.length ? buildTag('exercise') : '',
      w.pdfs?.filter(p=>p.label).length ? buildTag('pdf') : '',
      w.audios?.filter(a=>a.label).length ? buildTag('audio') : '',
      w.links?.length ? buildTag('link') : '',
      w.videos?.length ? buildTag('video') : '',
    ].filter(Boolean).join('');

    return `
      <div class="week-card" onclick="openModal(${w.number - 1})">
        <div class="week-header">
          <p class="week-number">Semana ${w.number}</p>
          <p class="week-title">${w.title}</p>
        </div>
        <div class="week-body">
          <div class="week-tags">${tags}</div>
          <p class="week-arrow">Ver material →</p>
        </div>
      </div>`;
  }).join('');
}

function openModal(index) {
  const w = WEEKS[index];
  document.getElementById('modalWeekLabel').textContent = `Semana ${w.number}`;
  document.getElementById('modalTitle').textContent = w.title;

  let html = '';

  if (w.pdfs?.filter(p=>p.label).length) {
    html += `<p class="section-label">📄 PDFs</p><ul class="item-list">`;
    w.pdfs.filter(p=>p.label).forEach((p, i) => {
      const id = `pdf-${Date.now()}-${i}`;
      html += `
        <li class="pdf-item" onclick="togglePdf('${id}', '${p.url}')">
          <span class="item-icon">📄</span>
          <span class="item-text" style="flex:1">${p.label}</span>
          <span style="font-size:.8rem;color:var(--plum-mid);font-weight:500">Abrir ▾</span>
        </li>
        <div class="pdf-viewer-wrap" id="${id}">
          <div class="pdf-toolbar">
            <span>${p.label}</span>
            <a href="${p.url}" target="_blank" download>⬇ Baixar</a>
          </div>
          <iframe src="" data-src="${p.url}" title="${p.label}"></iframe>
        </div>`;
    });
    html += `</ul>`;
  }

  if (w.exercises?.length) {
    html += `<p class="section-label">📝 Exercícios</p><ul class="item-list">`;
    w.exercises.forEach(e => {
      html += `<li><span class="item-icon">✏️</span><span class="item-text">${e}</span></li>`;
    });
    html += `</ul>`;
  }

  if (w.audios?.filter(a=>a.label).length) {
    html += '<p class="section-label">🎧 Áudios</p><ul class="item-list">';
    w.audios.filter(a=>a.label).forEach(a => {
      if (a.url) {
        html += '<li class="audio-item">'
          + '<div class="audio-item-top"><span class="item-icon">🎵</span>'
          + '<span class="item-text" style="font-weight:500">' + a.label + '</span></div>'
          + '<audio class="audio-player" controls preload="none">'
          + '<source src="' + a.url + '">Seu navegador não suporta áudio.</audio>'
          + '</li>';
      } else {
        html += '<li>'
          + '<span class="item-icon">🎵</span>'
          + '<span class="item-text"><span style="font-weight:500">' + a.label + '</span>'
          + '<span class="audio-no-link"> — enviado pelo WhatsApp</span></span>'
          + '</li>';
      }
    });
    html += '</ul>';
  }

  if (w.links?.length) {
    html += `<p class="section-label">🔗 Links</p><ul class="item-list">`;
    w.links.forEach(l => {
      html += `<li><span class="item-icon">🌐</span><span class="item-text"><a href="${l.url}" target="_blank">${l.label}</a></span></li>`;
    });
    html += `</ul>`;
  }

  if (w.videos?.length) {
    html += `<p class="section-label">▶️ Vídeos</p><ul class="item-list">`;
    w.videos.forEach(v => {
      html += `<li><span class="item-icon">🎬</span><span class="item-text"><a href="${v.url}" target="_blank">${v.label}</a></span></li>`;
    });
    html += `</ul>`;
  }

  if (w.yasNote) {
    html += `<div class="yas-note"><strong>Recado da Yas</strong>${w.yasNote}</div>`;
  }

  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('overlay').classList.add('open');
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('overlay')) {
    document.getElementById('overlay').classList.remove('open');
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function togglePdf(id, url) {
  const wrap = document.getElementById(id);
  const isOpen = wrap.classList.contains('open');
  // close all others first
  document.querySelectorAll('.pdf-viewer-wrap.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('iframe').src = '';
  });
  if (!isOpen) {
    const iframe = wrap.querySelector('iframe');
    if (!iframe.src || iframe.src === window.location.href) {
      iframe.src = iframe.dataset.src;
    }
    wrap.classList.add('open');
  }
}

renderGrid();