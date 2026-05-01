/* ══════════════════════════════════════════
   YV English — Plataforma do Aluno
   Paleta: site principal + header escura
══════════════════════════════════════════ */

:root {
  --cream:       #FAF7F2;
  --paper:       #FFFDF9;
  --amber:       #C8883A;
  --amber-soft:  #F0C87A;
  --plum:        #3D2645;
  --plum-mid:    #5C3D6E;
  --plum-light:  #EEE6F5;
  --text:        #1E1A1A;
  --muted:       #7A6E6E;
  --line:        #E7DED4;
  --radius:      14px;
  --hero-a: #030011;
  --hero-b: #0C0325;
  --hero-c: #1B0730;
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}

/* ── HERO ── */
.hero {
  background:
    radial-gradient(ellipse at 80% 0%, rgba(123,79,214,.22) 0%, transparent 55%),
    radial-gradient(ellipse at 0% 100%, rgba(200,136,58,.12) 0%, transparent 45%),
    linear-gradient(145deg, var(--hero-a) 0%, var(--hero-b) 50%, var(--hero-c) 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
}
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.018'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}
.hero-inner {
  position: relative;
  z-index: 1;
  padding: 28px 24px 52px;
  max-width: 900px;
  margin: 0 auto;
}
.hero-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}
.logo {
  width: 110px;
  height: auto;
  filter: drop-shadow(0 0 12px rgba(240,200,122,.25)) brightness(1.1);
}
.student-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: .82rem;
  font-weight: 500;
  color: rgba(255,255,255,.75);
  border: 1px solid rgba(255,255,255,.18);
  padding: 6px 14px 6px 10px;
  border-radius: 40px;
  backdrop-filter: blur(4px);
  background: rgba(255,255,255,.06);
}
.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--amber-soft);
  box-shadow: 0 0 8px var(--amber-soft);
  animation: pulse 2.4s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: .6; transform: scale(.85); }
}
.eyebrow {
  font-size: .72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .28em;
  color: var(--amber);
  margin-bottom: 16px;
}
.hero-body h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.6rem, 8vw, 4.2rem);
  font-weight: 600;
  line-height: 1.05;
  margin-bottom: 18px;
  letter-spacing: -.01em;
}
.hero-body h1 em { font-style: italic; color: var(--amber-soft); }
.hero-sub {
  font-size: .95rem;
  line-height: 1.65;
  color: rgba(255,255,255,.7);
  max-width: 440px;
  font-weight: 300;
}
.hero-deco { display: none; }
@media (min-width: 640px) {
  .hero-inner { padding: 36px 7vw 64px; }
  .logo { width: 118px; }
  .hero-deco {
    display: block;
    position: absolute;
    right: 7vw;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    z-index: 0;
  }
  .deco-word {
    font-family: 'Playfair Display', serif;
    font-size: 11rem;
    font-weight: 600;
    color: transparent;
    -webkit-text-stroke: 1px rgba(240,200,122,.14);
    line-height: 1;
    display: block;
  }
  .deco-line {
    display: block;
    width: 2px;
    height: 80px;
    background: linear-gradient(to bottom, var(--amber-soft), transparent);
    margin-left: auto;
    margin-top: 16px;
    opacity: .5;
  }
}

/* ── MAIN ── */
main {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}
@media (min-width: 640px) { main { padding: 52px 7vw 100px; } }

.section-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}
.label-line { flex: 1; height: 1px; background: var(--line); }
.section-label p {
  font-size: .72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .28em;
  color: var(--amber);
  white-space: nowrap;
}

/* ── CARDS ── */
.weeks-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 540px) { .weeks-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; } }
@media (min-width: 860px) { .weeks-grid { grid-template-columns: repeat(3, 1fr); } }

.week-card {
  background: var(--paper);
  border-radius: var(--radius);
  border: 1px solid var(--line);
  overflow: hidden;
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s;
  box-shadow: 0 2px 12px rgba(61,38,69,.06);
}
.week-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(61,38,69,.12);
  border-color: var(--amber);
}
.week-card:active { transform: translateY(-1px); }

.card-head {
  padding: 22px 20px 20px;
  background:
    radial-gradient(ellipse at 100% 0%, rgba(200,136,58,.15), transparent 50%),
    linear-gradient(140deg, var(--plum), var(--plum-mid));
  position: relative;
  overflow: hidden;
}
.card-head::after {
  content: '';
  position: absolute;
  right: -20px; bottom: -20px;
  width: 80px; height: 80px;
  border: 1.5px solid rgba(240,200,122,.15);
  border-radius: 50%;
}
.card-number {
  font-size: .68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .22em;
  color: var(--amber-soft);
  margin-bottom: 8px;
}
.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.15;
}
.card-body { padding: 16px 20px 18px; }
.card-icons { display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
.ricon {
  width: 30px; height: 30px;
  border-radius: 50%;
  display: grid; place-items: center;
  font-size: .82rem; font-weight: 600;
}
.ricon-pdf      { background: var(--plum-light); color: var(--plum-mid); }
.ricon-audio    { background: #FFF0DC; color: #A0611A; }
.ricon-exercise { background: #FFF8EC; color: var(--amber); }
.ricon-link     { background: #EAF7F1; color: #2D7158; }
.ricon-video    { background: #FDEBEB; color: #9D2828; }
.ricon-vocab    { background: #FFF0DC; color: #A0611A; }

.card-cta {
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: .85rem;
  font-weight: 600;
  color: var(--plum);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-cta-arrow { color: var(--amber); font-size: 1rem; transition: transform .2s; }
.week-card:hover .card-cta-arrow { transform: translateX(4px); }

/* ── OVERLAY ── */
.overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(10,6,18,.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 100;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
}
.overlay.open { display: flex; animation: fadeIn .2s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@media (min-width: 640px) { .overlay { align-items: center; padding: 32px; } }

/* ── MODAL ── */
.modal {
  background: var(--paper);
  width: 100%;
  max-height: 92vh;
  border-radius: 18px 18px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 -8px 60px rgba(0,0,0,.3);
  animation: slideUp .3s cubic-bezier(.22,.68,0,1.05) both;
}
@keyframes slideUp {
  from { transform: translateY(60px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
@media (min-width: 640px) {
  .modal {
    width: min(860px, 100%);
    max-height: 86vh;
    border-radius: 18px;
    flex-direction: row;
    animation: scaleIn .28s cubic-bezier(.22,.68,0,1.05) both;
  }
  @keyframes scaleIn {
    from { transform: scale(.95); opacity: 0; }
    to   { transform: scale(1); opacity: 1; }
  }
}
.modal-close {
  position: absolute;
  top: 14px; right: 14px;
  background: rgba(255,255,255,.15);
  border: 1px solid rgba(255,255,255,.25);
  color: #fff;
  width: 36px; height: 36px;
  border-radius: 50%;
  font-size: .9rem;
  cursor: pointer;
  display: grid; place-items: center;
  z-index: 20;
  transition: background .15s;
  flex-shrink: 0;
}
.modal-close:hover { background: rgba(255,255,255,.28); }

.modal-aside {
  background:
    radial-gradient(ellipse at 100% 0%, rgba(123,79,214,.22), transparent 50%),
    linear-gradient(155deg, #030011, #18062D);
  color: #fff;
  padding: 44px 24px 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}
/* mobile: aside compacta — esconde foco e coração */
@media (max-width: 639px) {
  .modal-aside {
    padding: 52px 24px 18px;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .aside-rule,
  .aside-focus,
  .aside-heart { display: none; }
  .aside-week  { margin-bottom: 4px; }
  .aside-title { font-size: 1.3rem; }
  .modal-close {
    top: 12px;
    right: 12px;
    background: rgba(255,255,255,.2);
    width: 36px;
    height: 36px;
    z-index: 30;
  }
}
@media (min-width: 640px) { .modal-aside { width: 260px; padding: 64px 32px 44px; } }

.aside-week {
  font-size: .7rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: .28em;
  color: var(--amber-soft); margin-bottom: 12px;
}
.aside-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.9rem; font-weight: 600; line-height: 1.08;
}
.aside-rule {
  display: block; width: 40px; height: 2px;
  background: var(--amber); margin: 20px 0;
}
.aside-focus { flex: 1; }
.aside-focus strong {
  display: block; font-size: .7rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: .18em;
  color: var(--amber-soft); margin-bottom: 10px;
}
.aside-focus p {
  font-size: .88rem; line-height: 1.6;
  color: rgba(255,255,255,.75); font-weight: 300;
}
.aside-heart { display: block; margin-top: 28px; font-size: 1.3rem; color: var(--amber-soft); }

.modal-body {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 28px 24px 40px;
  background: var(--paper);
}
@media (min-width: 640px) { .modal-body { padding: 48px 40px 48px; } }

/* ── RECURSOS ── */
.resource-section { margin-bottom: 26px; }
.resource-section:last-child { margin-bottom: 0; }
.res-title {
  font-size: .68rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: .2em;
  color: var(--plum); margin-bottom: 10px;
  display: flex; align-items: center; gap: 8px;
}
.res-title::after { content: ''; flex: 1; height: 1px; background: var(--line); }
.res-list { display: flex; flex-direction: column; gap: 8px; }
.res-item {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 12px 14px;
  display: flex; align-items: center;
  justify-content: space-between;
  gap: 12px; font-size: .88rem;
  background: var(--cream);
  transition: border-color .15s;
}
.res-item:hover { border-color: var(--amber); }
.res-item-label { color: var(--text); font-weight: 400; line-height: 1.4; flex: 1; }
.res-actions { display: flex; gap: 6px; flex-shrink: 0; }
.btn-open {
  color: var(--plum-mid); text-decoration: none; font-weight: 600;
  font-size: .82rem; padding: 5px 10px;
  border: 1px solid var(--plum-light); border-radius: 6px;
  transition: background .15s, color .15s; white-space: nowrap;
}
.btn-open:hover { background: var(--plum-light); color: var(--plum); }
.btn-download {
  background: var(--amber); color: #fff !important;
  text-decoration: none; font-weight: 600; font-size: .82rem;
  padding: 5px 10px; border-radius: 6px; white-space: nowrap;
  transition: opacity .15s;
}
.btn-download:hover { opacity: .85; }

.exercise-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.exercise-list li {
  display: flex; gap: 10px; align-items: flex-start;
  font-size: .88rem; line-height: 1.5; padding: 10px 14px;
  background: var(--cream); border: 1px solid var(--line); border-radius: 10px;
}
.exercise-list li::before {
  content: '✦'; color: var(--amber); font-size: .65rem;
  margin-top: 4px; flex-shrink: 0;
}

.res-item.audio-item { flex-direction: column; align-items: stretch; }
.res-item.audio-item audio {
  width: 100%; height: 36px; margin-top: 8px;
  accent-color: var(--plum); border-radius: 6px;
}
.via-whatsapp { font-size: .78rem; color: var(--muted); font-style: italic; flex-shrink: 0; }

.yas-tip {
  margin-top: 28px; padding: 16px 18px;
  background: #FFF8EC; border-left: 3px solid var(--amber);
  border-radius: 0 10px 10px 0; font-size: .86rem; color: #7A5520; line-height: 1.6;
}
.yas-tip strong {
  color: var(--amber); font-size: .68rem; text-transform: uppercase;
  letter-spacing: .14em; display: block; margin-bottom: 4px;
}

/* ── VOCABULÁRIO ── */
.vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 10px;
}
.vocab-card {
  height: 100px;
  cursor: pointer;
  perspective: 600px;
  -webkit-perspective: 600px;
  outline: none;
  position: relative;
}
.vocab-card:focus .vocab-front,
.vocab-card:focus .vocab-back { box-shadow: 0 0 0 2px var(--amber); }

.vocab-front, .vocab-back {
  position: absolute; inset: 0;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 8px 10px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: transform .42s cubic-bezier(.4,0,.2,1);
  text-align: center;
}
.vocab-front {
  background: var(--paper);
  transform: rotateY(0deg);
  justify-content: flex-start;
  padding-top: 6px;
}
.vocab-back  { background: var(--plum); border-color: var(--plum); transform: rotateY(180deg); }
.vocab-card.flipped .vocab-front { transform: rotateY(-180deg); }
.vocab-card.flipped .vocab-back  { transform: rotateY(0deg); }

.vocab-front-inner {
  display: flex; flex-direction: column; align-items: center; flex: 1; justify-content: center;
}
.vocab-word {
  font-family: 'Playfair Display', serif;
  font-size: .92rem; font-weight: 600; color: var(--plum); line-height: 1.2;
}
.vocab-phonetic {
  font-size: .68rem; color: var(--muted); margin-top: 3px;
  font-weight: 300; letter-spacing: .02em;
}
.vocab-hint {
  font-size: .6rem; color: var(--muted); margin-top: 4px;
  text-transform: uppercase; letter-spacing: .1em;
}
.vocab-translation {
  font-size: .9rem; font-weight: 500;
  color: var(--amber-soft); line-height: 1.3;
}
.vocab-speak-btn {
  position: static;
  background: none; border: none; cursor: pointer;
  font-size: .85rem; padding: 3px 6px; border-radius: 6px;
  color: var(--muted); transition: color .15s, background .15s; line-height: 1;
  margin-bottom: 2px;
  align-self: flex-end;
}
.vocab-speak-btn:hover { color: var(--amber); background: #FFF8EC; }
.vocab-speak-btn.speaking {
  color: var(--amber);
  animation: speakPulse .6s ease-in-out infinite alternate;
}
@keyframes speakPulse { from { opacity: 1; } to { opacity: .4; } }

/* ── GLOSSÁRIO ── */
.glossary-section {
  max-width: 860px; margin: 0 auto;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius); overflow: hidden;
}
.glossary-empty {
  padding: 28px 24px; font-size: .9rem;
  color: var(--muted); text-align: center;
}
.glossary-row {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 20px;
  border-bottom: 1px solid var(--line);
  transition: background .12s;
}
.glossary-row:last-child { border-bottom: none; }
.glossary-row:hover { background: var(--cream); }
.glos-word {
  font-family: 'Playfair Display', serif;
  font-size: .92rem; font-weight: 600; color: var(--plum);
  min-width: 130px; flex-shrink: 0;
}
.glos-trans { font-size: .85rem; color: var(--text); flex: 1; }
.glos-phonetic {
  font-size: .75rem; color: var(--muted);
  font-weight: 300; margin-left: 4px;
}
.glos-speak {
  background: none; border: none; cursor: pointer;
  font-size: .82rem; color: var(--muted);
  padding: 2px 4px; border-radius: 4px;
  transition: color .15s; flex-shrink: 0;
}
.glos-speak:hover { color: var(--amber); }
.glos-week-badge {
  font-size: .65rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: .1em;
  color: var(--amber); background: #FFF8EC;
  border: 1px solid #F0C87A55;
  border-radius: 20px; padding: 3px 9px;
  white-space: nowrap; flex-shrink: 0;
}

/* ── NOTAS DA AULA ── */
.notes-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.notes-list li {
  font-size: .85rem;
  line-height: 1.55;
  padding: 10px 14px 10px 16px;
  background: var(--plum-light);
  border-left: 3px solid var(--plum-mid);
  border-radius: 0 10px 10px 0;
  color: var(--plum);
  font-weight: 400;
}

/* ── DAILY CONTENT BUTTON ── */
.daily-btn-wrap {
  max-width: 860px;
  margin: 0 auto 40px;
  padding: 0 4px;
}

.daily-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 28px 26px;
  background: var(--plum);
  border: none;
  cursor: pointer;
  text-align: left;
  transition: transform .22s ease, box-shadow .22s ease;
  box-shadow: 0 6px 28px rgba(61,38,69,.22), 0 2px 6px rgba(61,38,69,.12);
  position: relative;
  /* torn paper edges using clip-path */
  clip-path: polygon(
    0% 4px, 6px 0%, 14px 5px, 22px 1px, 30px 6px, 40px 0%,
    50px 4px, 60px 0%, 70px 5px, 82px 1px, 94px 4px, 106px 0%,
    118px 5px, 130px 1px, 142px 4px, 154px 0%, 166px 5px, 180px 2px,
    194px 5px, 208px 0%, 222px 4px, 240px 1px, 260px 5px, 280px 0%,
    300px 4px, 320px 1px, 340px 5px, 360px 0%, 380px 3px, 400px 0%,
    420px 4px, 440px 1px, 460px 5px, 480px 0%, 500px 4px,
    calc(100% - 20px) 2px, calc(100% - 10px) 0%, calc(100% - 4px) 4px, 100% 2px,
    100% calc(100% - 5px), calc(100% - 8px) 100%, calc(100% - 18px) calc(100% - 4px),
    calc(100% - 30px) 100%, calc(100% - 42px) calc(100% - 5px),
    calc(100% - 56px) 100%, calc(100% - 70px) calc(100% - 3px),
    calc(100% - 86px) 100%, calc(100% - 102px) calc(100% - 5px),
    calc(100% - 120px) 100%, calc(100% - 140px) calc(100% - 4px),
    calc(100% - 160px) 100%, calc(100% - 182px) calc(100% - 5px),
    calc(100% - 206px) 100%, calc(100% - 230px) calc(100% - 3px),
    calc(100% - 256px) 100%, calc(100% - 284px) calc(100% - 5px),
    320px 100%, 290px calc(100% - 4px), 260px 100%, 230px calc(100% - 5px),
    200px 100%, 170px calc(100% - 3px), 140px 100%, 110px calc(100% - 5px),
    80px 100%, 50px calc(100% - 4px), 20px 100%, 8px calc(100% - 5px),
    0% calc(100% - 3px)
  );
}

.daily-btn:hover {
  transform: translateY(-2px) rotate(-.3deg);
  box-shadow: 0 10px 36px rgba(61,38,69,.3);
}

.daily-btn-left {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.daily-tag {
  font-size: .68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .22em;
  color: var(--amber-soft);
  display: block;
}

.daily-btn-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 600;
  font-style: italic;
  color: #fff;
  line-height: 1.2;
}

.daily-btn-sub {
  font-size: .74rem;
  color: rgba(255,255,255,.5);
  font-weight: 300;
}

.daily-btn-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}

.daily-pin {
  font-size: 1.5rem;
  line-height: 1;
}

.daily-btn-cta {
  font-size: .72rem;
  font-weight: 600;
  color: var(--amber-soft);
  white-space: nowrap;
}

@media (min-width: 540px) {
  .daily-btn { padding: 26px 34px 30px; }
  .daily-btn-title { font-size: 1.35rem; }
}

/* ── DAILY ASIDE ── */
.daily-aside { background:
  radial-gradient(ellipse at 100% 0%, rgba(200,136,58,.2), transparent 50%),
  linear-gradient(155deg, #1A0800, #2D1000) !important;
}

/* ── DAILY LOCKED ── */
.daily-locked {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 24px;
  gap: 12px;
}

.daily-lock-icon { font-size: 2.5rem; }

.daily-locked h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: var(--plum);
}

.daily-locked p {
  font-size: .9rem;
  color: var(--muted);
  line-height: 1.6;
  max-width: 300px;
}

.daily-locked strong { color: var(--amber); }

/* ── DAILY TEXT ── */
.daily-text-wrap { margin-bottom: 4px; }

.daily-text {
  background: var(--cream);
  border: 1px solid var(--line);
  border-left: 3px solid var(--amber);
  border-radius: 0 10px 10px 0;
  padding: 16px 18px;
  font-size: .92rem;
  line-height: 1.75;
  color: var(--text);
}

/* ── DAILY QUESTIONS ── */
.daily-questions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.daily-q-text {
  font-size: .9rem;
  color: var(--text);
  margin-bottom: 10px;
  line-height: 1.5;
}

.daily-options {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.daily-opt {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  font-size: .88rem;
  font-family: 'DM Sans', sans-serif;
  color: var(--text);
  transition: background .15s, border-color .15s;
  width: 100%;
}

.daily-opt:hover:not(:disabled) {
  background: var(--plum-light);
  border-color: var(--plum-mid);
}

.daily-opt:disabled { cursor: default; }

.opt-letter {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--cream);
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  font-size: .75rem;
  font-weight: 600;
  color: var(--plum);
  flex-shrink: 0;
}

.daily-opt.correct {
  background: #EAF7F1;
  border-color: #2D7158;
}
.daily-opt.correct .opt-letter {
  background: #2D7158;
  border-color: #2D7158;
  color: #fff;
}

.daily-opt.wrong {
  background: #FDEBEB;
  border-color: #9D2828;
}
.daily-opt.wrong .opt-letter {
  background: #9D2828;
  border-color: #9D2828;
  color: #fff;
}

.daily-feedback {
  font-size: .8rem;
  margin-top: 6px;
  font-weight: 500;
}
.feedback-correct { color: #2D7158; }
.feedback-wrong   { color: #9D2828; }

.daily-reset-btn {
  margin-top: 28px;
  padding: 10px 20px;
  background: none;
  border: 1.5px solid var(--line);
  border-radius: 8px;
  font-size: .85rem;
  font-weight: 600;
  color: var(--muted);
  cursor: pointer;
  transition: border-color .15s, color .15s;
  font-family: 'DM Sans', sans-serif;
}
.daily-reset-btn:hover {
  border-color: var(--amber);
  color: var(--amber);
}

/* ── ATIVIDADES DA AULA ── */
.classwork-instruction {
  font-size: .82rem;
  color: var(--muted);
  font-style: italic;
  margin-bottom: 10px;
  line-height: 1.5;
}

.classwork-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.classwork-item {
  background: var(--cream);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 12px 14px;
}

.classwork-q {
  font-size: .88rem;
  color: var(--text);
  line-height: 1.5;
  margin-bottom: 8px;
}

.classwork-reveal-btn {
  background: none;
  border: 1px solid var(--plum-light);
  color: var(--plum-mid);
  font-size: .78rem;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  padding: 4px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background .15s, color .15s;
}

.classwork-reveal-btn:hover {
  background: var(--plum-light);
  color: var(--plum);
}

.classwork-answer {
  margin-top: 8px;
  font-size: .88rem;
  font-weight: 600;
  color: #2D7158;
  background: #EAF7F1;
  border: 1px solid #B8E0D0;
  border-radius: 6px;
  padding: 7px 12px;
  line-height: 1.5;
}

/* ── GLOSSARY BUTTON ── */
.glossary-btn-wrap {
  max-width: 860px;
  margin: 32px auto 0;
  padding: 0 4px;
}

.glossary-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 28px 26px;
  background: var(--amber);
  border: none;
  cursor: pointer;
  text-align: left;
  transition: transform .22s ease, box-shadow .22s ease;
  box-shadow: 0 6px 28px rgba(200,136,58,.3), 0 2px 6px rgba(200,136,58,.15);
  clip-path: polygon(
    0% 4px, 6px 0%, 14px 5px, 22px 1px, 30px 6px, 40px 0%,
    50px 4px, 60px 0%, 70px 5px, 82px 1px, 94px 4px, 106px 0%,
    118px 5px, 130px 1px, 142px 4px, 154px 0%, 166px 5px, 180px 2px,
    194px 5px, 208px 0%, 222px 4px, 240px 1px, 260px 5px, 280px 0%,
    300px 4px, 320px 1px, 340px 5px, 360px 0%, 380px 3px, 400px 0%,
    420px 4px, 440px 1px, 460px 5px, 480px 0%, 500px 4px,
    calc(100% - 20px) 2px, calc(100% - 10px) 0%, calc(100% - 4px) 4px, 100% 2px,
    100% calc(100% - 5px), calc(100% - 8px) 100%, calc(100% - 18px) calc(100% - 4px),
    calc(100% - 30px) 100%, calc(100% - 42px) calc(100% - 5px),
    calc(100% - 56px) 100%, calc(100% - 70px) calc(100% - 3px),
    calc(100% - 86px) 100%, calc(100% - 102px) calc(100% - 5px),
    calc(100% - 120px) 100%, calc(100% - 140px) calc(100% - 4px),
    calc(100% - 160px) 100%, calc(100% - 182px) calc(100% - 5px),
    calc(100% - 206px) 100%, calc(100% - 230px) calc(100% - 3px),
    calc(100% - 256px) 100%, calc(100% - 284px) calc(100% - 5px),
    320px 100%, 290px calc(100% - 4px), 260px 100%, 230px calc(100% - 5px),
    200px 100%, 170px calc(100% - 3px), 140px 100%, 110px calc(100% - 5px),
    80px 100%, 50px calc(100% - 4px), 20px 100%, 8px calc(100% - 5px),
    0% calc(100% - 3px)
  );
}

.glossary-btn:hover {
  transform: translateY(-2px) rotate(.2deg);
  box-shadow: 0 10px 36px rgba(200,136,58,.4);
}

.glossary-btn-left { display: flex; flex-direction: column; gap: 5px; }

.glossary-tag {
  font-size: .68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .22em;
  color: rgba(255,255,255,.75);
  display: block;
}

.glossary-btn-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 600;
  font-style: italic;
  color: #fff;
  line-height: 1.2;
}

.glossary-btn-sub {
  font-size: .74rem;
  color: rgba(255,255,255,.65);
  font-weight: 300;
}

.glossary-btn-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}

.glossary-icon { font-size: 1.5rem; line-height: 1; }

.glossary-btn-cta {
  font-size: .72rem;
  font-weight: 600;
  color: rgba(255,255,255,.9);
  white-space: nowrap;
}

/* ── FLOATING BUTTONS ── */
.floating-btns {
  position: fixed;
  bottom: 24px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 50;
}

.float-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 4px 16px rgba(0,0,0,.18);
  transition: transform .2s, box-shadow .2s;
  text-decoration: none;
}

.float-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,.22);
}

.float-wa {
  background: #25D366;
  color: #fff;
}

.float-top {
  background: var(--plum);
  color: var(--amber-soft);
}

/* ── DAILY ACTION BUTTONS ── */
.daily-action-btns {
  margin-top: 28px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.daily-back-btn {
  padding: 10px 20px;
  background: var(--plum-light);
  border: 1.5px solid var(--plum-mid);
  border-radius: 8px;
  font-size: .85rem;
  font-weight: 600;
  color: var(--plum);
  cursor: pointer;
  transition: background .15s, color .15s;
  font-family: 'DM Sans', sans-serif;
}

.daily-back-btn:hover {
  background: var(--plum);
  color: #fff;
}
