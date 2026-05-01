const PLAN = document.body.getAttribute("data-plan") || "Foundation";

const DAILY = {
  date: "1 de maio, 2026",
  text: "Cristiane is in the park today. She is with her family. Her boyfriend is with her. They are happy. Her children are playing. They are tired but happy. Cristiane is not crazy — she is just a great mom! How are you doing, Cristiane?",
  questions: [
    {
      question: "Where is Cristiane today?",
      options: [
        { letter: "a", text: "She is at home" },
        { letter: "b", text: "She is at school" },
        { letter: "c", text: "She is in the park" },
        { letter: "d", text: "She is at work" },
        { letter: "e", text: "She is at the mall" }
      ],
      answer: "c"
    },
    {
      question: "Who is with Cristiane?",
      options: [
        { letter: "a", text: "Her teacher" },
        { letter: "b", text: "Her family" },
        { letter: "c", text: "Her boss" },
        { letter: "d", text: "Her students" },
        { letter: "e", text: "Her friends only" }
      ],
      answer: "b"
    },
    {
      question: "Are the children tired?",
      options: [
        { letter: "a", text: "No, they are not" },
        { letter: "b", text: "Yes, they are tired and sad" },
        { letter: "c", text: "Yes, they are tired but happy" },
        { letter: "d", text: "No, they are playing calmly" },
        { letter: "e", text: "Yes, they are sleeping" }
      ],
      answer: "c"
    },
    {
      question: "Is Cristiane crazy?",
      options: [
        { letter: "a", text: "Yes, she is" },
        { letter: "b", text: "No, she is not — she is a great mom" },
        { letter: "c", text: "Maybe she is" },
        { letter: "d", text: "Yes, a little bit" },
        { letter: "e", text: "No, she is tired" }
      ],
      answer: "b"
    },
    {
      question: "What is the question 'How are you doing?' asking?",
      options: [
        { letter: "a", text: "Where are you?" },
        { letter: "b", text: "What are you doing?" },
        { letter: "c", text: "How are you feeling / how is it going?" },
        { letter: "d", text: "Who are you with?" },
        { letter: "e", text: "When are you coming?" }
      ],
      answer: "c"
    }
  ]
};

const WEEKS = [
  {
    number: 1,
    title: "To Be — Ser e Estar",
    focus: "Entender a diferenca entre SER e ESTAR em ingles — tudo e To Be! Voce ja sabe mais do que imagina.",
    pdfs: [
      { label: "To Be — Semana 1", url: "https://drive.google.com/file/d/1Sy2vF5MsjdcpRLBHGqVCNOPtS8N5dBYf/view?usp=sharing" }
    ],
    exercises: [
      "Escreva 3 frases sobre voce usando I am",
      "Escreva 3 frases sobre sua familia usando he is, she is, they are",
      "Transforme em perguntas: 'You are at home.' / 'She is at school.' / 'We are dating.'",
      "Escreva a negativa: I am crazy. / She is tired. / They are my friends.",
      "Complete: ___ are friends. (nos) / ___ is my daughter. (ela) / ___ are my children. (eles)"
    ],
    audios: [{ label: "Pronuncia — enviado pelo WhatsApp", url: "" }],
    links: [],
    videos: [],
    notes: [
      "Em ingles, SER e ESTAR sao a mesma coisa: TO BE",
      "I am Cristiane. (SER) = I am in the park. (ESTAR) — mesmo verbo!",
      "AFIRMATIVA → I am | You are | He is | She is | It is | We are | You are | They are",
      "INTERROGATIVA → Am I? | Are you? | Is he? | Is she? | Are we? | Are they?",
      "NEGATIVA → I am not | You are not (aren't) | He is not (isn't) | She is not (isn't)",
      "CHILD (filho/filha) → CHILDREN (filhos/filhas) — plural irregular!",
      "HOW ARE YOU DOING? = Como voce esta? / Como vai?"
    ],
    classwork: [
      {
        title: "Atividade 1 — Afirmativa para Interrogativa",
        instruction: "Transforme as frases em perguntas.",
        items: [
          { q: "You are at home.",       a: "Are you at home?" },
          { q: "She is at school.",      a: "Is she at school?" },
          { q: "We are dating.",         a: "Are we dating?" },
          { q: "They are my children.",  a: "Are they your children?" },
          { q: "He is your son.",        a: "Is he your son?" }
        ]
      },
      {
        title: "Atividade 2 — Afirmativa para Negativa",
        instruction: "Escreva a forma negativa usando a contracao.",
        items: [
          { q: "I am crazy.",            a: "I am not crazy. / I'm not crazy." },
          { q: "She is tired.",          a: "She isn't tired." },
          { q: "They are my friends.",   a: "They aren't my friends." },
          { q: "You are at home.",       a: "You aren't at home." },
          { q: "We are dating.",         a: "We aren't dating." }
        ]
      },
      {
        title: "Atividade 3 — Complete com To Be",
        instruction: "Complete com a forma correta: am, is ou are.",
        items: [
          { q: "I ___ Cristiane.",                a: "I am Cristiane." },
          { q: "She ___ my daughter.",            a: "She is my daughter." },
          { q: "We ___ friends.",                 a: "We are friends." },
          { q: "They ___ my children.",           a: "They are my children." },
          { q: "You ___ my English teacher.",     a: "You are my English teacher." }
        ]
      }
    ],
    vocabulary: [
      { word: "I am",         translation: "eu sou / eu estou",                 phonetic: "/ai am/" },
      { word: "you are",      translation: "voce e/esta",                       phonetic: "/yu ar/" },
      { word: "he is",        translation: "ele e / ele esta",                  phonetic: "/hi iz/" },
      { word: "she is",       translation: "ela e / ela esta",                  phonetic: "/shi iz/" },
      { word: "it is",        translation: "isso e / isso esta",                phonetic: "/it iz/" },
      { word: "we are",       translation: "nos somos / nos estamos",           phonetic: "/wi ar/" },
      { word: "they are",     translation: "eles/elas sao / estao",             phonetic: "/dhei ar/" },
      { word: "tired",        translation: "cansado(a)",                        phonetic: "/taird/" },
      { word: "home",         translation: "em casa",                           phonetic: "/houm/" },
      { word: "at school",    translation: "na escola",                         phonetic: "/at skul/" },
      { word: "girlfriend",   translation: "namorada",                          phonetic: "/gerlfriend/" },
      { word: "boyfriend",    translation: "namorado",                          phonetic: "/boifriend/" },
      { word: "dating",       translation: "namorando",                         phonetic: "/deiting/" },
      { word: "children",     translation: "filhos / filhas — plural",          phonetic: "/tchildren/" },
      { word: "child",        translation: "filho / filha — singular",          phonetic: "/tchaild/" },
      { word: "family",       translation: "familia",                           phonetic: "/famili/" },
      { word: "crazy",        translation: "louco(a)",                          phonetic: "/kreizi/" },
      { word: "how are you",  translation: "como voce esta?",                   phonetic: "/hau ar yu/" }
    ]
  },

  {
    number: 2,
    title: "To Be — Perguntas e Negativas",
    focus: "Dominar as formas interrogativa e negativa do To Be com confianca.",
    pdfs: [],
    exercises: [
      "Escreva 5 perguntas sobre pessoas da sua vida usando To Be",
      "Escreva 5 negativas usando as contracoes isn't e aren't",
      "Responda: Are you at home? / Is she your daughter? / Are they your friends?"
    ],
    audios: [{ label: "Pronuncia — enviado pelo WhatsApp", url: "" }],
    links: [],
    videos: [],
    notes: [],
    classwork: [],
    vocabulary: [
      { word: "isn't",    translation: "nao e / nao esta",          phonetic: "/iznt/" },
      { word: "aren't",   translation: "nao sao / nao estao",       phonetic: "/arnt/" },
      { word: "daughter", translation: "filha",                     phonetic: "/doter/" },
      { word: "son",      translation: "filho",                     phonetic: "/san/" },
      { word: "in the park", translation: "no parque",              phonetic: "/in dhe park/" },
      { word: "okay",     translation: "bem / tudo bem",            phonetic: "/okei/" }
    ]
  }
];

var CW_ANSWERS = {};

function openDaily() {
  var overlay = document.getElementById("dailyOverlay");
  var body    = document.getElementById("dailyBody");
  var dateEl  = document.getElementById("dailyDate");
  dateEl.textContent = DAILY.date;
  if (PLAN !== "Fluency") {
    body.innerHTML = '<div class="daily-locked">'
      + '<span class="daily-lock-icon">🔒</span>'
      + '<h3>Conteudo Fluency</h3>'
      + '<p>O Daily Content e exclusivo para alunas do plano <strong>Fluency</strong>.</p>'
      + '<p>Fale com a Yas para fazer o upgrade! ✦</p>'
      + '</div>';
  } else {
    var html = '<div class="daily-text-wrap"><h3 class="res-title">Texto de hoje</h3>'
      + '<div class="daily-text">' + DAILY.text + '</div></div>'
      + '<div class="daily-questions-wrap"><h3 class="res-title" style="margin-top:24px">Exercicios</h3>'
      + '<div class="daily-questions">';
    DAILY.questions.forEach(function(q, qi) {
      html += '<div class="daily-q" id="q' + qi + '"><p class="daily-q-text"><strong>' + (qi+1) + '.</strong> ' + q.question + '</p><div class="daily-options">';
      q.options.forEach(function(opt) {
        html += '<button class="daily-opt" id="q'+qi+'-'+opt.letter+'" onclick="checkAnswer('+qi+',\''+opt.letter+'\',\''+q.answer+'\')">'
          + '<span class="opt-letter">'+opt.letter+'</span><span class="opt-text">'+opt.text+'</span></button>';
      });
      html += '</div><p class="daily-feedback" id="feedback'+qi+'"></p></div>';
    });
    html += '</div><div class="daily-action-btns">'
      + '<button class="daily-reset-btn" onclick="openDaily()">Recomecar ↺</button>'
      + '<button class="daily-back-btn" onclick="closeDaily()">Voltar ao menu ←</button>'
      + '</div></div>';
    body.innerHTML = html;
  }
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function checkAnswer(qi, chosen, correct) {
  var opts = document.querySelectorAll("#q"+qi+" .daily-opt");
  opts.forEach(function(btn){btn.disabled=true;});
  var chosenBtn  = document.getElementById("q"+qi+"-"+chosen);
  var correctBtn = document.getElementById("q"+qi+"-"+correct);
  var feedback   = document.getElementById("feedback"+qi);
  if (chosen===correct) {
    chosenBtn.classList.add("correct");
    feedback.textContent="✦ Correct!";
    feedback.className="daily-feedback feedback-correct";
  } else {
    chosenBtn.classList.add("wrong");
    correctBtn.classList.add("correct");
    feedback.textContent="The correct answer is "+correct.toUpperCase()+".";
    feedback.className="daily-feedback feedback-wrong";
  }
}

function closeDaily() {
  document.getElementById("dailyOverlay").classList.remove("open");
  document.body.style.overflow="";
}

document.getElementById("dailyOverlay").addEventListener("click",function(e){if(e.target===this)closeDaily();});

function speakWord(word,btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(word);
  u.lang="en-US"; u.rate=0.85;
  if (btn){btn.classList.add("speaking");u.onend=function(){btn.classList.remove("speaking");};u.onerror=function(){btn.classList.remove("speaking");};}
  window.speechSynthesis.speak(u);
}

function hasContent(arr){return Array.isArray(arr)&&arr.filter(function(i){return i&&i.label;}).length>0;}

function renderGrid() {
  var grid=document.getElementById("weeksGrid"); var html="";
  WEEKS.forEach(function(w,i){
    var icons="";
    if(hasContent(w.pdfs))icons+='<span class="ricon ricon-pdf">P</span>';
    if(hasContent(w.audios))icons+='<span class="ricon ricon-audio">A</span>';
    if(hasContent(w.exercises))icons+='<span class="ricon ricon-exercise">E</span>';
    if(hasContent(w.links))icons+='<span class="ricon ricon-link">L</span>';
    if(hasContent(w.videos))icons+='<span class="ricon ricon-video">V</span>';
    if(w.vocabulary&&w.vocabulary.length)icons+='<span class="ricon ricon-vocab">W</span>';
    html+='<article class="week-card" onclick="openModal('+i+')" tabindex="0">'
      +'<div class="card-head"><p class="card-number">Semana '+w.number+'</p><h2 class="card-title">'+w.title+'</h2></div>'
      +'<div class="card-body"><div class="card-icons">'+icons+'</div>'
      +'<div class="card-cta"><span>Ver material</span><span class="card-cta-arrow">→</span></div></div></article>';
  });
  grid.innerHTML=html;
}

function openModal(index) {
  var w=WEEKS[index];
  document.getElementById("modalWeekLabel").textContent="Semana "+w.number;
  document.getElementById("modalTitle").textContent=w.title;
  document.getElementById("modalFocus").textContent=w.focus||"";
  document.getElementById("modalBody").innerHTML=
    renderPdfs(w.pdfs)+renderExercises(w.exercises)+renderAudios(w.audios)+
    renderLinks(w.links)+renderVideos(w.videos)+renderNotes(w.notes)+
    renderClasswork(w.classwork)+renderVocabulary(w.vocabulary)+
    '<div class="yas-tip"><strong>Dica da YV</strong>Pratique todos os dias um pouco. Consistencia e o que te leva a fluencia. ✦</div>';
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow="hidden";
}

function closeModal(){if(window.speechSynthesis)window.speechSynthesis.cancel();document.getElementById("overlay").classList.remove("open");document.body.style.overflow="";}

function renderPdfs(pdfs){var items=(pdfs||[]).filter(function(p){return p.label;});if(!items.length)return"";var html='<div class="resource-section"><h3 class="res-title">PDFs</h3><div class="res-list">';items.forEach(function(p){html+='<div class="res-item"><span class="res-item-label">'+p.label+'</span><div class="res-actions"><a href="'+p.url+'" target="_blank" class="btn-open">Abrir ↗</a><a href="'+p.url+'" download class="btn-download">Baixar</a></div></div>';});return html+'</div></div>';}

function renderExercises(exercises){var items=(exercises||[]).filter(Boolean);if(!items.length)return"";var html='<div class="resource-section"><h3 class="res-title">Exercicios</h3><ul class="exercise-list">';items.forEach(function(e){html+='<li>'+e+'</li>';});return html+'</ul></div>';}

function renderAudios(audios){var items=(audios||[]).filter(function(a){return a.label;});if(!items.length)return"";var html='<div class="resource-section"><h3 class="res-title">Audios</h3><div class="res-list">';items.forEach(function(a){if(a.url){html+='<div class="res-item audio-item"><span class="res-item-label">'+a.label+'</span><audio controls preload="none"><source src="'+a.url+'"></audio></div>';}else{html+='<div class="res-item"><span class="res-item-label">'+a.label+'</span><span class="via-whatsapp">via WhatsApp</span></div>';}});return html+'</div></div>';}

function renderLinks(links){var items=(links||[]).filter(function(l){return l.label;});if(!items.length)return"";var html='<div class="resource-section"><h3 class="res-title">Links</h3><div class="res-list">';items.forEach(function(l){html+='<div class="res-item"><span class="res-item-label">'+l.label+'</span><div class="res-actions"><a href="'+l.url+'" target="_blank" class="btn-open">Abrir ↗</a></div></div>';});return html+'</div></div>';}

function renderVideos(videos){var items=(videos||[]).filter(function(v){return v.label;});if(!items.length)return"";var html='<div class="resource-section"><h3 class="res-title">Videos</h3><div class="res-list">';items.forEach(function(v){html+='<div class="res-item"><span class="res-item-label">'+v.label+'</span><div class="res-actions"><a href="'+v.url+'" target="_blank" class="btn-open">Assistir ↗</a></div></div>';});return html+'</div></div>';}

function renderNotes(notes){var items=(notes||[]).filter(Boolean);if(!items.length)return"";var html='<div class="resource-section"><h3 class="res-title">Notas da Aula</h3><ul class="notes-list">';items.forEach(function(n){html+='<li>'+n+'</li>';});return html+'</ul></div>';}

function renderClasswork(classwork){var sections=(classwork||[]).filter(function(s){return s.title;});if(!sections.length)return"";var html="";sections.forEach(function(section,si){html+='<div class="resource-section"><h3 class="res-title">'+section.title+'</h3><p class="classwork-instruction">'+section.instruction+'</p><div class="classwork-list">';section.items.forEach(function(item,ii){var key="cw_"+si+"_"+ii;CW_ANSWERS[key]=item.a;html+='<div class="classwork-item"><p class="classwork-q"><strong>'+(ii+1)+'.</strong> '+item.q+'</p><button class="classwork-reveal-btn" onclick="revealAnswer(this,\''+key+'\')">Ver resposta</button><p class="classwork-answer" id="'+key+'" style="display:none"></p></div>';});html+='</div></div>';});return html;}

function revealAnswer(btn,key){var el=document.getElementById(key);if(el){el.textContent=CW_ANSWERS[key]||"";el.style.display="block";}btn.style.display="none";}

function renderVocabulary(vocabulary){var items=(vocabulary||[]).filter(function(v){return v.word;});if(!items.length)return"";window._vocabWords=[];var html='<div class="resource-section"><h3 class="res-title">Vocabulario</h3><div class="vocab-grid">';items.forEach(function(v,i){window._vocabWords[i]=v.word;html+='<div class="vocab-card" tabindex="0" onclick="this.classList.toggle(\'flipped\')"><div class="vocab-front"><button class="vocab-speak-btn" onclick="event.stopPropagation();speakVocab('+i+',this)" title="Ouvir">🔊</button><div class="vocab-front-inner"><span class="vocab-word">'+v.word+'</span>'+(v.phonetic?'<span class="vocab-phonetic">'+v.phonetic+'</span>':'')+'</div><span class="vocab-hint">toque para ver</span></div><div class="vocab-back"><span class="vocab-translation">'+v.translation+'</span></div></div>';});return html+'</div></div>';}

function speakVocab(i,btn){if(window._vocabWords&&window._vocabWords[i])speakWord(window._vocabWords[i],btn);}

function buildGlossaryHTML(){var all=[];WEEKS.forEach(function(w){(w.vocabulary||[]).filter(function(v){return v.word;}).forEach(function(v){all.push({word:v.word,translation:v.translation,phonetic:v.phonetic,week:w.number});});});if(!all.length)return'<p class="glossary-empty">O glossario vai aparecer aqui conforme as semanas forem avancando. ✦</p>';window._glossWords=[];var html="";all.forEach(function(v,i){window._glossWords[i]=v.word;html+='<div class="glossary-row"><span class="glos-word">'+v.word+'</span><span class="glos-trans">'+v.translation+(v.phonetic?' <span class="glos-phonetic">'+v.phonetic+'</span>':'')+'</span><button class="glos-speak" onclick="speakGloss('+i+',this)" title="Ouvir">🔊</button><span class="glos-week-badge">Sem. '+v.week+'</span></div>';});return html;}

function speakGloss(i,btn){if(window._glossWords&&window._glossWords[i])speakWord(window._glossWords[i],btn);}

var glossaryOpen=false;
function toggleGlossary(){var section=document.getElementById("glossarySection");var cta=document.getElementById("glossaryBtnCta");if(!section)return;glossaryOpen=!glossaryOpen;if(glossaryOpen){if(!section.innerHTML.trim())section.innerHTML=buildGlossaryHTML();section.style.display="block";if(cta)cta.textContent="Fechar ↑";setTimeout(function(){section.scrollIntoView({behavior:"smooth",block:"start"});},80);}else{section.style.display="none";if(cta)cta.textContent="Ver palavras →";}}

function renderGlossary(){}

document.getElementById("overlay").addEventListener("click",function(e){if(e.target===this)closeModal();});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});
var touchStartY=0;
document.addEventListener("touchstart",function(e){touchStartY=e.touches[0].clientY;},{passive:true});
document.addEventListener("touchmove",function(e){if(document.getElementById("overlay").classList.contains("open")){if(e.touches[0].clientY-touchStartY>100)closeModal();}},{passive:true});

renderGrid();
renderGlossary();
