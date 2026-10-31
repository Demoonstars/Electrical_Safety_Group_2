/**
 * app.js — SPA «Итоговый тест по электробезопасности (II группа)»
 * Vanilla JS ES6+, без фреймворков
 */

/* ════════════════════════════════════════════════════════════
   1. БАНК ВОПРОСОВ (20 вопросов)
   Источники: ПОТЭЭ (Приказ Минтруда № 903н), ПТЭЭП (Приказ Минэнерго № 811), ПУЭ
   correctIndex — индекс правильного ответа (0-based)
════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    text: 'Какое из перечисленных условий делает помещение ОСОБО ОПАСНЫМ в отношении поражения электрическим током?',
    options: [
      'Наличие токопроводящей пыли',
      'Наличие токопроводящих полов (металлических, железобетонных)',
      'Наличие химически активной или органической среды',
      'Высокая температура (более +35 °С)'
    ],
    correctIndex: 2
  },
  {
    text: 'Для чего предназначено защитное заземление?',
    options: [
      'Для обеспечения нормального функционирования электроустановки',
      'Для защиты человека от поражения током при замыкании на корпус',
      'Для отвода статического электричества',
      'Для снижения напряжения в сети'
    ],
    correctIndex: 1
  },
  {
    text: 'Какой цветовой маркировкой обозначается нулевой защитный проводник (PE)?',
    options: [
      'Синий',
      'Красно-коричневый',
      'Желто-зеленый',
      'Черный'
    ],
    correctIndex: 2
  },
  {
    text: 'Где ЗАПРЕЩАЕТСЯ прокладывать кабельные линии?',
    options: [
      'В туннелях и коллекторах',
      'Непосредственно в земле под фундаментами зданий',
      'По поверхности стен и потолков',
      'В кабельных каналах'
    ],
    correctIndex: 1
  },
  {
    text: 'Какое напряжение должны иметь переносные ручные светильники в особо опасных помещениях?',
    options: [
      'Не выше 220 В',
      'Не выше 50 В',
      'Не выше 12 В',
      'Не выше 36 В'
    ],
    correctIndex: 2
  },
  {
    text: 'К какой категории относится персонал, обслуживающий сложное энергонасыщенное технологическое оборудование (например, станки с ЧПУ)?',
    options: [
      'Электротехнический персонал',
      'Электротехнологический персонал',
      'Неэлектротехнический персонал',
      'Административно-технический персонал'
    ],
    correctIndex: 1
  },
  {
    text: 'Кто имеет право присваивать II группу по электробезопасности?',
    options: [
      'Любой сотрудник из числа административно-технического персонала',
      'Специалист по охране труда',
      'Работник из числа электротехнического персонала с группой не ниже III',
      'Только руководитель организации'
    ],
    correctIndex: 2
  },
  {
    text: 'С какой периодичностью проводится очередная проверка знаний для электротехнического персонала (в том числе со II группой)?',
    options: [
      'Не реже 1 раза в год',
      'Не реже 1 раза в 2 года',
      'Не реже 1 раза в 3 года',
      'Не реже 1 раза в 5 лет'
    ],
    correctIndex: 0
  },
  {
    text: 'Какая форма работы с персоналом проводится после проверки знаний при подготовке на новую должность?',
    options: [
      'Стажировка',
      'Дублирование',
      'Противоаварийная тренировка',
      'Внеплановый инструктаж'
    ],
    correctIndex: 1
  },
  {
    text: 'Что из перечисленного является организационным мероприятием, обеспечивающим безопасность работ в электроустановках?',
    options: [
      'Проверка отсутствия напряжения',
      'Установка ограждений и плакатов',
      'Оформление наряда-допуска или распоряжения',
      'Наложение заземления'
    ],
    correctIndex: 2
  },
  {
    text: 'Каким документом оформляется допуск к работе при выполнении небольших по объему работ в порядке текущей эксплуатации?',
    options: [
      'Нарядом-допуском',
      'Распоряжением',
      'Перечнем работ, выполняемых в порядке текущей эксплуатации',
      'Протоколом комиссии'
    ],
    correctIndex: 2
  },
  {
    text: 'Какие электрозащитные средства относятся к ОСНОВНЫМ в электроустановках до 1000 В?',
    options: [
      'Диэлектрические галоши',
      'Диэлектрические ковры',
      'Изолирующие штанги, клещи, диэлектрические перчатки',
      'Изолирующие колпаки'
    ],
    correctIndex: 2
  },
  {
    text: 'Каким классом защиты должен обладать электроинструмент для работы в особо неблагоприятных условиях (например, в металлических резервуарах)?',
    options: [
      'Класс 0',
      'Класс I',
      'Класс II',
      'Класс III'
    ],
    correctIndex: 3
  },
  {
    text: 'Какой плакат относится к предупреждающим знакам безопасности?',
    options: [
      '«НЕ ВКЛЮЧАТЬ! РАБОТАЮТ ЛЮДИ»',
      '«СТОЙ! НАПРЯЖЕНИЕ»',
      '«РАБОТАТЬ ЗДЕСЬ»',
      '«ЗАЗЕМЛЕНО»'
    ],
    correctIndex: 1
  },
  {
    text: 'На какое минимальное расстояние запрещается приближаться к лежащему на земле оборванному проводу ЛЭП?',
    options: [
      'Менее 2 метров',
      'Менее 5 метров',
      'Менее 8 метров',
      'Менее 20 метров'
    ],
    correctIndex: 2
  },
  {
    text: 'Каким образом необходимо передвигаться, если вы оказались в зоне шагового напряжения?',
    options: [
      'Бегом, делая широкие шаги',
      'Прыжками на одной ноге',
      '«Гусиным шагом», не отрывая ступни от земли',
      'Ползком'
    ],
    correctIndex: 2
  },
  {
    text: 'Что необходимо сделать В ПЕРВУЮ ОЧЕРЕДЬ при освобождении пострадавшего от действия электрического тока напряжением до 1000 В?',
    options: [
      'Начать сердечно-легочную реанимацию',
      'Отключить электрооборудование (снять напряжение)',
      'Оттащить пострадавшего за сухую одежду',
      'Вызвать скорую помощь'
    ],
    correctIndex: 1
  },
  {
    text: 'Каким огнетушителем разрешается тушить электроустановки под напряжением до 1000 В?',
    options: [
      'Водным или пенным',
      'Углекислотным (ОУ) или порошковым (ОП)',
      'Любым первичным средством',
      'Только песком'
    ],
    correctIndex: 1
  },
  {
    text: 'Сколько времени составляет клиническая смерть, при которой еще можно спасти человека?',
    options: [
      '1-2 минуты',
      '4-6 минут',
      '10-15 минут',
      '30 минут'
    ],
    correctIndex: 1
  },
  {
    text: 'В каком соотношении проводятся нажатия на грудную клетку и искусственные вдохи при сердечно-легочной реанимации?',
    options: [
      '15 : 1',
      '30 : 2',
      '10 : 2',
      '5 : 1'
    ],
    correctIndex: 1
  }
];

/* ════════════════════════════════════════════════════════════
   2. КОНФИГУРАЦИЯ
════════════════════════════════════════════════════════════ */

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyzZkLieX62KUqxQy04mjVDcMlXAPjpV1Gd9RhakBsRHEK83s5H277nIy4_n9zQuLky/exec'; // Сюда вставите новую ссылку

/** Порог прохождения: 85% = 17 правильных из 20 */
const PASS_THRESHOLD = 0.85;
const TOTAL_QUESTIONS = QUESTIONS.length; // 20

/* ════════════════════════════════════════════════════════════
   3. СОСТОЯНИЕ ПРИЛОЖЕНИЯ
════════════════════════════════════════════════════════════ */
const state = {
  currentScene: 1,
  consentGiven: false,
  userData: {
    fullName:     '',
    organization: '',
    position:     '',
    department:   '',
    birthDate:    '',
    hireDate:     ''
  },
  answers: [],
  currentQuestionIndex: 0
};

/* ════════════════════════════════════════════════════════════
   4. DOM-ССЫЛКИ
════════════════════════════════════════════════════════════ */
const sceneMap = {
  1: document.getElementById('scene-welcome'),
  2: document.getElementById('scene-consent'),
  3: document.getElementById('scene-form'),
  4: document.getElementById('scene-quiz'),
  5: document.getElementById('scene-result')
};

const btnStart       = document.getElementById('btn-start');
const btnConsentCont = document.getElementById('btn-consent-continue');
const btnFormSubmit  = document.getElementById('btn-form-submit');
const btnNext        = document.getElementById('btn-next');
const btnNextLabel   = document.getElementById('btn-next-label');
const btnRetry       = document.getElementById('btn-retry');

const consentCheckbox = document.getElementById('consent-checkbox');

const inputFullname   = document.getElementById('input-fullname');
const inputOrg        = document.getElementById('input-org');
const inputPosition   = document.getElementById('input-position');
const inputDepartment = document.getElementById('input-department');
const inputBirthdate  = document.getElementById('input-birthdate');
const inputHiredate   = document.getElementById('input-hiredate');

const quizCounter      = document.getElementById('quiz-counter');
const progressBarFill  = document.getElementById('progress-bar-fill');
const progressBarTrack = document.getElementById('progress-bar-track');
const questionCard     = document.getElementById('question-card');
const questionNumber   = document.getElementById('question-number');
const questionText     = document.getElementById('question-text');
const optionsList      = document.getElementById('options-list');

const resultIconWrap = document.getElementById('result-icon-wrap');
const resultTitle    = document.getElementById('result-title');
const resultText     = document.getElementById('result-text');
const scoreNumber    = document.getElementById('score-number');
const scoreRingFill  = document.getElementById('score-ring-fill');
const statCorrect    = document.getElementById('stat-correct');
const statPercent    = document.getElementById('stat-percent');
const statStatus     = document.getElementById('stat-status');
const submitStatus   = document.getElementById('submit-status');

/* ════════════════════════════════════════════════════════════
   5. УПРАВЛЕНИЕ СЦЕНАМИ
════════════════════════════════════════════════════════════ */
function showScene(n) {
  Object.entries(sceneMap).forEach(([idx, scene]) => {
    if (!scene) return;
    if (Number(idx) === n) {
      scene.classList.add('active');
      scene.removeAttribute('aria-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scene.classList.remove('active');
      scene.setAttribute('aria-hidden', 'true');
    }
  });
  state.currentScene = n;
}

/* ════════════════════════════════════════════════════════════
   6. СЦЕНА 2: СОГЛАСИЕ НА ОБРАБОТКУ ПДн
════════════════════════════════════════════════════════════ */
function updateConsentButton() {
  const checked = consentCheckbox.checked;
  state.consentGiven = checked;
  btnConsentCont.disabled = !checked;
  btnConsentCont.setAttribute('aria-disabled', String(!checked));
}
consentCheckbox.addEventListener('change', updateConsentButton);

/* ════════════════════════════════════════════════════════════
   7. СЦЕНА 3: ВАЛИДАЦИЯ ФОРМЫ
════════════════════════════════════════════════════════════ */
const formFields = [
  inputFullname, inputOrg, inputPosition,
  inputDepartment, inputBirthdate, inputHiredate
];

function validateForm() {
  const allFilled = formFields.every(f => f.value.trim() !== '');
  btnFormSubmit.disabled = !allFilled;
  btnFormSubmit.setAttribute('aria-disabled', String(!allFilled));
}

formFields.forEach(field => {
  field.addEventListener('input', validateForm);
  field.addEventListener('change', validateForm);
});

function collectFormData() {
  state.userData.fullName     = inputFullname.value.trim();
  state.userData.organization = inputOrg.value.trim();
  state.userData.position     = inputPosition.value.trim();
  state.userData.department   = inputDepartment.value.trim();
  state.userData.birthDate    = inputBirthdate.value;
  state.userData.hireDate     = inputHiredate.value;
}

/* ════════════════════════════════════════════════════════════
   8. СЦЕНА 4: ЛОГИКА ТЕСТА
════════════════════════════════════════════════════════════ */
function startQuiz() {
  state.answers = [];
  state.currentQuestionIndex = 0;
  renderQuestion(0);
}

function renderQuestion(index) {
  const q = QUESTIONS[index];
  const num = index + 1;

  quizCounter.textContent = `Вопрос ${num} из ${TOTAL_QUESTIONS}`;
  const pct = (index / TOTAL_QUESTIONS) * 100;
  progressBarFill.style.width = pct + '%';
  progressBarTrack.setAttribute('aria-valuenow', String(index));

  questionNumber.textContent = 'Вопрос ' + String(num).padStart(2, '0');
  questionText.textContent = q.text;

  optionsList.innerHTML = '';
  q.options.forEach((optText, optIdx) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    label.setAttribute('for', `opt-${index}-${optIdx}`);

    const radio = document.createElement('input');
    radio.type      = 'radio';
    radio.name      = `q${index}`;
    radio.id        = `opt-${index}-${optIdx}`;
    radio.value     = String(optIdx);
    radio.className = 'option-radio';
    if (state.answers[index] === optIdx) radio.checked = true;

    radio.addEventListener('change', () => onOptionSelect(index, optIdx));

    const marker = document.createElement('span');
    marker.className = 'option-marker';
    marker.setAttribute('aria-hidden', 'true');

    const textSpan = document.createElement('span');
    textSpan.className   = 'option-text';
    textSpan.textContent = optText;

    label.appendChild(radio);
    label.appendChild(marker);
    label.appendChild(textSpan);
    optionsList.appendChild(label);
  });

  updateNextButton(index);
  btnNextLabel.textContent = (index === TOTAL_QUESTIONS - 1) ? 'Завершить тест' : 'Далее';
}

function onOptionSelect(qIdx, optIdx) {
  state.answers[qIdx] = optIdx;
  updateNextButton(qIdx);
}

function updateNextButton(index) {
  const answered = state.answers[index] !== undefined;
  btnNext.disabled = !answered;
  btnNext.setAttribute('aria-disabled', String(!answered));
}

function goToNextQuestion() {
  const cur = state.currentQuestionIndex;

  if (cur < TOTAL_QUESTIONS - 1) {
    questionCard.classList.add('leaving');
    setTimeout(() => {
      questionCard.classList.remove('leaving');
      state.currentQuestionIndex = cur + 1;
      renderQuestion(state.currentQuestionIndex);
    }, 250);
  } else {
    showResults();
  }
}

/* ════════════════════════════════════════════════════════════
   9. СЦЕНА 5: РЕЗУЛЬТАТЫ
════════════════════════════════════════════════════════════ */
function calculateResult() {
  let correct = 0;
  QUESTIONS.forEach((q, idx) => {
    if (state.answers[idx] === q.correctIndex) correct++;
  });
  const percent = Math.round((correct / TOTAL_QUESTIONS) * 100);
  const passed  = (correct / TOTAL_QUESTIONS) >= PASS_THRESHOLD;
  return { correct, percent, passed };
}

function showResults() {
  const { correct, percent, passed } = calculateResult();

  showScene(5);

  resultIconWrap.textContent = passed ? '🎉' : '😔';

  resultTitle.className   = 'result-title ' + (passed ? 'success' : 'failure');
  resultTitle.textContent = passed
    ? 'Поздравляем! Тест сдан успешно.'
    : 'Тест не сдан.';

  resultText.textContent = passed
    ? 'Вы успешно прошли итоговый тест по электробезопасности. Ваши результаты сохранены в системе.'
    : `Вы ответили правильно на ${correct} из ${TOTAL_QUESTIONS} вопросов. ` +
      'Рекомендуем освежить знания по материалам обучения и попробовать ещё раз. ' +
      'У вас обязательно получится!';

  scoreNumber.textContent = String(correct);
  statCorrect.textContent = `${correct} из ${TOTAL_QUESTIONS}`;
  statPercent.textContent = percent + '%';
  statStatus.textContent  = passed ? 'Сдал / Сдала' : 'Не сдан';
  statStatus.className    = 'stat-value stat-status ' + (passed ? 'success' : 'failure');

  const offset = 314 - (percent / 100) * 314;
  scoreRingFill.className = 'score-ring-fill ' + (passed ? 'success' : 'failure');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scoreRingFill.style.strokeDashoffset = String(offset);
    });
  });

  progressBarFill.style.width = '100%';
  progressBarTrack.setAttribute('aria-valuenow', String(TOTAL_QUESTIONS));

  submitStatus.textContent = '';
  submitStatus.className   = 'submit-status';

  const payload = {
    fullName:       state.userData.fullName,
    organization:   state.userData.organization,
    position:       state.userData.position,
    department:     state.userData.department,
    birthDate:      state.userData.birthDate,
    hireDate:       state.userData.hireDate,
    correctAnswers: correct,
    totalQuestions: TOTAL_QUESTIONS,
    percent:        percent,
    passed:         passed,
    timestamp:      new Date().toISOString()
  };

  sendResultsToGoogleSheets(payload);
}

/* ════════════════════════════════════════════════════════════
   10. ОТПРАВКА ДАННЫХ В GOOGLE SHEETS
════════════════════════════════════════════════════════════ */
async function sendResultsToGoogleSheets(payload) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_DEPLOYED_APPS_SCRIPT_URL') {
    console.warn('[Quiz] Google Apps Script URL не настроен. Данные не отправлены.');
    submitStatus.textContent = '⚠ URL Google Sheets не настроен (см. README.md)';
    submitStatus.className   = 'submit-status error';
    return;
  }

  submitStatus.textContent = '⏳ Сохранение результатов...';
  submitStatus.className   = 'submit-status sending';

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });
    console.log('[Quiz] Данные отправлены в Google Sheets:', payload);
    submitStatus.textContent = '✅ Результаты сохранены в системе';
    submitStatus.className   = 'submit-status sent';
  } catch (error) {
    console.error('[Quiz] Ошибка отправки данных:', error);
    submitStatus.textContent = '⚠ Не удалось сохранить результаты. Обратитесь к ответственному за электробезопасность.';
    submitStatus.className   = 'submit-status error';
  }
}

/* ════════════════════════════════════════════════════════════
   11. СБРОС И ПЕРЕЗАПУСК
════════════════════════════════════════════════════════════ */
function resetApp() {
  state.consentGiven         = false;
  state.userData             = { fullName: '', organization: '', position: '', department: '', birthDate: '', hireDate: '' };
  state.answers              = [];
  state.currentQuestionIndex = 0;

  [inputFullname, inputOrg, inputPosition, inputDepartment, inputBirthdate, inputHiredate]
    .forEach(f => { f.value = ''; });
  validateForm();

  consentCheckbox.checked = false;
  updateConsentButton();

  scoreRingFill.style.strokeDashoffset = '314';
  scoreRingFill.className = 'score-ring-fill';

  showScene(1);
}

/* ════════════════════════════════════════════════════════════
   12. ОБРАБОТЧИКИ СОБЫТИЙ
════════════════════════════════════════════════════════════ */
btnStart.addEventListener('click', () => showScene(2));

btnConsentCont.addEventListener('click', () => {
  if (state.consentGiven) showScene(3);
});

btnFormSubmit.addEventListener('click', () => {
  collectFormData();
  startQuiz();
  showScene(4);
});

btnNext.addEventListener('click', () => {
  if (!btnNext.disabled) goToNextQuestion();
});

btnRetry.addEventListener('click', resetApp);

document.getElementById('user-form').addEventListener('submit', e => e.preventDefault());

/* ════════════════════════════════════════════════════════════
   13. ИНИЦИАЛИЗАЦИЯ
════════════════════════════════════════════════════════════ */
function init() {
  showScene(1);
  updateConsentButton();
  validateForm();
  btnNext.disabled = true;
  btnNext.setAttribute('aria-disabled', 'true');
  console.log('[Quiz] Приложение инициализировано. Вопросов:', TOTAL_QUESTIONS);
}

document.addEventListener('DOMContentLoaded', init);