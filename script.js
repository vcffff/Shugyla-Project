'use strict';

// Transcribed from the survey tables on physical PDF pages 5–9.
// Values are preserved as published, including rounding and zero responses.
const surveyQuestions = [
  {
    id: 1, category: 'trust', page: 5,
    question: 'Егер ЖИ диагностиканы стоматологтан дәлірек жасай алса, пациент ЖИ-ге сенуі керек пе?',
    answers: [['Екеуінің пікірін салыстыру керек', 41.7], ['Жоқ, соңғы шешімді дәрігер қабылдауы керек', 33.3], ['Иә, егер дәлдігі жоғары болса', 25.0]]
  },
  {
    id: 2, category: 'profession', page: 5,
    question: 'Егер болашақта робот тісті стоматологтан жылдам, арзан және ауыртпалықсыз емдесе, адам стоматологқа барудың қажеті қала ма?',
    answers: [['Иә, бәрібір адам дәрігер керек', 58.3], ['Тек күрделі жағдайларда дәрігер керек', 41.7], ['Жоқ, робот жеткілікті', 0.0]]
  },
  {
    id: 3, category: 'trust', page: 5,
    question: 'Егер ЖИ қателесу ықтималдығы 1%, ал адамның қателесу ықтималдығы 5% болса, кімге сенер едіңіз?',
    answers: [['ЖИ', 50.0], ['Стоматолог', 25.0], ['Екеуіне де бірдей сенбеймін', 25.0]]
  },
  {
    id: 4, category: 'profession', page: 6,
    question: 'ЖИ стоматологтың жұмысын 50%-ға автоматтандырса, стоматологтарға бұрынғыдай көп адам қажет бола ма?',
    answers: [['Қай бағыт екеніне байланысты', 50.0], ['Иә', 25.0], ['Жоқ', 25.0]]
  },
  {
    id: 5, category: 'trust', page: 6,
    question: 'Сіз стоматологқа қаралып тұрғанда, дәрігердің орнына ЖИ диагноз қойса, бұған келісер ме едіңіз?',
    answers: [['Тек дәрігер бақыласа', 83.3], ['Иә', 16.7], ['Жоқ', 0.0]]
  },
  {
    id: 6, category: 'profession', page: 6,
    question: 'ЖИ стоматологтың жұмысын жеңілдетсе, стоматологтың жалақысы да төмендеуі керек пе?',
    answers: [['Бұл еңбек нарығына байланысты', 50.0], ['Керісінше, технологияны меңгерген дәрігер көбірек табуы керек', 25.0], ['Иә', 16.7], ['Жоқ', 8.3]]
  },
  {
    id: 7, category: 'education', page: 7,
    question: 'Егер университетте ЖИ стоматология студентінің жұмысын бірнеше минутта орындаса, студент оны қолдануы керек пе?',
    answers: [['Иә, бұл — технологияны дұрыс пайдалану', 41.7], ['Тек тексеру үшін қолдануға болады', 41.7], ['Жоқ, студент өзі орындауы керек', 16.7]]
  },
  {
    id: 8, category: 'education', page: 7,
    question: 'Егер студент барлық тапсырмасын ChatGPT арқылы орындап, бірақ емтиханнан жоғары балл алса — ол жақсы студент пе?',
    answers: [['Егер материалды түсінсе — иә', 66.7], ['Нақты айту қиын', 16.7], ['Иә, нәтиже маңызды', 8.3], ['Жоқ, ол білім алған жоқ', 8.3]]
  },
  {
    id: 9, category: 'profession', page: 7,
    question: 'ЖИ-ді қолданбайтын стоматолог болашақта технологияны қолданатын стоматологтан кәсіби тұрғыда артта қала ма?',
    answers: [['Әлі белгісіз', 50.0], ['Міндетті емес', 25.0], ['Иә', 16.7], ['Жоқ', 8.3]]
  },
  {
    id: 10, category: 'education', page: 7,
    question: 'Егер ЖИ стоматологтың 80% жұмысын орындай алса, стоматологияда 6 жыл оқу әлі де қажет пе?',
    answers: [['Оқу форматы ғана өзгеруі керек', 41.7], ['6 жыл тым ұзақ', 33.3], ['Иә', 25.0]]
  },
  {
    id: 11, category: 'profession', page: 8,
    question: 'Стоматологтың басты артықшылығы — оның білімі ме, әлде пациентпен қарым-қатынасы ма?',
    answers: [['Үшеуі де', 58.3], ['Қолмен жұмыс жасау қабілеті', 25.0], ['Білімі', 16.7]]
  },
  {
    id: 12, category: 'profession', page: 8,
    question: 'Болашақта стоматолог емес, «ЖИ-мен жұмыс істей алатын стоматолог» көбірек сұранысқа ие болады деп ойлайсыз ба?',
    answers: [['Мүмкін', 58.3], ['Жоқ', 25.0], ['Иә', 16.7]]
  },
  {
    id: 13, category: 'ethics', page: 8,
    question: 'Егер ЖИ диагнозда қателесіп, пациентке зиян келсе, кім жауап беруі керек?',
    answers: [['ЖИ қолданған клиника', 50.0], ['Барлығы бірге', 25.0], ['Стоматолог', 16.7], ['ЖИ жасаған компания', 8.3]]
  },
  {
    id: 14, category: 'trust', page: 8,
    question: 'Егер ЖИ сізге «сіздің тісіңізде проблема бар» десе, бірақ стоматолог «бәрі жақсы» десе, кімге сенесіз?',
    answers: [['Екінші дәрігерге барамын', 41.7], ['Екеуін де тексеремін', 33.3], ['Дәрігер', 16.7], ['ЖИ', 8.3]]
  },
  {
    id: 15, category: 'future', page: 9,
    question: 'ЖИ дамуы стоматология студенттерінің болашағына қауіп пе, әлде мүмкіндік пе?',
    answers: [['Мүмкіндік', 41.7], ['Екеуі де', 25.0], ['Әзірге белгісіз', 25.0], ['Қауіп', 8.3]]
  },
  {
    id: 16, category: 'future', page: 9,
    question: 'Шыныңызды айтыңыз: 6 жыл стоматология оқып жатқан адам ретінде ЖИ-дің дамуы сізді болашақ мамандығыңыз үшін қорқыта ма?',
    answers: [['Керісінше, ЖИ біздің жұмысымызды жеңілдетеді', 33.3], ['Жоқ, ЖИ бізді алмастырмайды', 16.7], ['Аздап алаңдатады', 16.7], ['«Мен бұл туралы ойланғым келмейді»', 8.3], ['Басқа жауап нұсқалары', 25.0]]
  }
];

const categories = [
  { id: 'all', label: 'Барлығы' },
  { id: 'trust', label: 'Сенім және диагностика' },
  { id: 'profession', label: 'Дәрігердің рөлі' },
  { id: 'education', label: 'Білім беру' },
  { id: 'ethics', label: 'Жауапкершілік' },
  { id: 'future', label: 'Болашаққа көзқарас' }
];

const percent = value => `${value.toFixed(1).replace('.', ',')}%`;
const padNumber = value => String(value).padStart(2, '0');

function initializeSurvey() {
  const app = document.querySelector('#survey-app');
  const filters = document.querySelector('.survey-filters');
  const questionNav = document.querySelector('#question-nav');
  const chart = document.querySelector('#answer-chart');
  const previous = document.querySelector('#previous-question');
  const next = document.querySelector('#next-question');
  let currentCategory = 'all';
  let currentId = 1;

  function visibleQuestions() {
    return surveyQuestions.filter(item => currentCategory === 'all' || item.category === currentCategory);
  }

  function render() {
    const questions = visibleQuestions();
    const item = surveyQuestions.find(question => question.id === currentId);
    const position = questions.findIndex(question => question.id === currentId);
    const category = categories.find(entry => entry.id === item.category);

    filters.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.category === currentCategory));
    });

    // Keep navigation buttons in the DOM so keyboard focus survives selection.
    questionNav.querySelectorAll('button').forEach(button => {
      const id = Number(button.dataset.id);
      button.hidden = !questions.some(question => question.id === id);
      button.setAttribute('aria-pressed', String(id === currentId));
    });

    document.querySelector('#filtered-count').textContent = questions.length;
    document.querySelector('#question-category').textContent = category.label.toLocaleUpperCase('kk-KZ');
    document.querySelector('#question-position').textContent = `${padNumber(item.id)} / 16`;
    document.querySelector('#question-title').textContent = item.question;
    document.querySelector('#source-page').textContent = `Дереккөз: PDF, ${item.page}-бет · ${item.id}-сұрақ`;
    chart.replaceChildren();

    const maximum = Math.max(...item.answers.map(answer => answer[1]));
    const list = document.createElement('ul');
    list.className = 'answer-chart';
    list.style.cssText = 'list-style:none;padding:0;margin:0;';
    list.setAttribute('aria-label', 'Жауап нұсқалары және пайыздық үлестері');
    item.answers.forEach(([label, value]) => {
      const row = document.createElement('li');
      row.className = `answer-row${value === maximum ? ' is-leading' : ''}`;
      const labelRow = document.createElement('div');
      labelRow.className = 'answer-label';
      const text = document.createElement('span');
      text.textContent = label;
      const number = document.createElement('strong');
      number.textContent = percent(value);
      labelRow.append(text, number);

      const track = document.createElement('div');
      track.className = 'bar-track';
      track.setAttribute('aria-hidden', 'true');
      const bar = document.createElement('div');
      bar.className = 'bar-fill';
      bar.style.setProperty('--bar-width', `${value}%`);
      track.append(bar);
      row.append(labelRow, track);
      list.append(row);
    });
    chart.append(list);
    previous.disabled = position === 0;
    next.disabled = position === questions.length - 1;
    document.querySelector('#survey-status').textContent = `${item.id}-сұрақ. ${item.question} ${item.answers.map(([label, value]) => `${label}: ${percent(value)}`).join('; ')}.`;
  }

  categories.forEach(category => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filter-button';
    button.dataset.category = category.id;
    button.textContent = category.label;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      currentCategory = category.id;
      if (!visibleQuestions().some(item => item.id === currentId)) {
        currentId = visibleQuestions()[0].id;
      }
      render();
    });
    filters.append(button);
  });

  surveyQuestions.forEach(item => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'question-button';
    button.textContent = padNumber(item.id);
    button.dataset.id = item.id;
    button.setAttribute('aria-label', `${item.id}-сұрақ: ${item.question}`);
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => { currentId = item.id; render(); });
    questionNav.append(button);
  });

  function step(direction) {
    const questions = visibleQuestions();
    const position = questions.findIndex(item => item.id === currentId);
    const target = questions[position + direction];
    if (target) { currentId = target.id; render(); }
  }
  previous.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));

  document.querySelectorAll('[data-question]').forEach(link => {
    link.addEventListener('click', () => {
      currentCategory = 'all';
      currentId = Number(link.dataset.question);
      render();
    });
  });

  renderAllResults();
  render();
  app.hidden = false;
}

function renderAllResults() {
  const container = document.querySelector('#all-results-content');
  surveyQuestions.forEach(item => {
    const section = document.createElement('section');
    section.className = 'all-question';
    const heading = document.createElement('h4');
    heading.id = `full-question-${item.id}`;
    heading.textContent = `${item.id}. ${item.question}`;
    const table = document.createElement('table');
    table.setAttribute('aria-labelledby', heading.id);
    const head = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Жауап нұсқасы', 'Пайыздық үлесі'].forEach(label => {
      const cell = document.createElement('th');
      cell.scope = 'col';
      cell.textContent = label;
      headerRow.append(cell);
    });
    head.append(headerRow);
    const body = document.createElement('tbody');
    item.answers.forEach(([label, value]) => {
      const row = document.createElement('tr');
      [label, percent(value)].forEach(content => {
        const cell = document.createElement('td');
        cell.textContent = content;
        row.append(cell);
      });
      body.append(row);
    });
    table.append(head, body);
    const source = document.createElement('p');
    source.className = 'table-source';
    source.textContent = `12 респондент · PDF, ${item.page}-бет`;
    section.append(heading, table, source);
    container.append(section);
  });
}

function initializeNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const mobileQuery = window.matchMedia('(max-width: 760px)');

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.menu-label').textContent = open ? 'Жабу' : 'Мәзір';
    nav.classList.toggle('is-open', open);
  }
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileQuery.matches) {
        setOpen(false);
        // Move focus away from the closed menu to the selected section.
        const target = document.querySelector(link.getAttribute('href'));
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setOpen(false);
  });
  mobileQuery.addEventListener('change', () => setOpen(false));

  if ('IntersectionObserver' in window) {
    const navLinks = [...nav.querySelectorAll('a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    navLinks.forEach(link => observer.observe(document.querySelector(link.hash)));
  }
}

function initializeReveals() {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -35px 0px' });
  document.querySelectorAll('.method-grid article, .stat, .discussion-items article').forEach(card => {
    card.classList.add('reveal');
    const index = [...card.parentElement.children].indexOf(card);
    card.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 70}ms`);
  });
  document.querySelectorAll('.reveal').forEach(section => {
    section.classList.add('is-pending');
    observer.observe(section);
  });
}

// Expand the accessible tables for printing, then restore the reader's state.
let resultsWereOpen = false;
window.addEventListener('beforeprint', () => {
  const details = document.querySelector('.all-results');
  resultsWereOpen = details.open;
  details.open = true;
});
window.addEventListener('afterprint', () => {
  document.querySelector('.all-results').open = resultsWereOpen;
});

initializeSurvey();
initializeNavigation();
initializeReveals();
