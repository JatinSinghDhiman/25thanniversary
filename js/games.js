// ===================================================================
// PANKAJ & POOJA 25TH ANNIVERSARY - INTERACTIVE GAMES ENGINE
// ===================================================================

// Game 1: The 25th Anniversary Couple Quiz
const quizData = [
  {
    question: "When did Pankaj and Pooja tie the sacred knot?",
    options: [
      "1st December 2001",
      "14th February 2002",
      "25th November 2000",
      "1st January 2001"
    ],
    correct: 0,
    fact: "Yes! 1st December 2001 was the historic day their fairytale began!"
  },
  {
    question: "Who is most likely to say 'Sorry' first after a cute fight?",
    options: [
      "Pankaj (The Peace-Maker)",
      "Pooja (The Sweet Queen)",
      "Both at the exact same second!",
      "Chhoti Laxmi & Ghar Ka Chirag have to mediate!"
    ],
    correct: 0,
    fact: "A happy husband knows saying sorry first keeps the love evergreen!"
  },
  {
    question: "What is their favorite routine to spend quality time together?",
    options: [
      "Evening hot chai & endless talks",
      "Binge-watching family movies",
      "Planning family vacations",
      "All of the above together with family!"
    ],
    correct: 3,
    fact: "Every moment together is a blessing, especially over hot cups of chai!"
  },
  {
    question: "Who takes longer to get dressed and ready for a wedding party?",
    options: [
      "Pooja (Perfection takes time!)",
      "Pankaj (Fixing the watch and collar 10 times)",
      "Both take equal time",
      "They are always ready on time"
    ],
    correct: 0,
    fact: "Pooja always shines brightest, and Pankaj happily waits with a smile!"
  },
  {
    question: "What are the two biggest blessings of their 25 years journey?",
    options: [
      "Chhoti Laxmi & Ghar Ka Chirag",
      "New cars and gadgets",
      "Endless shopping sprees",
      "Gold medals"
    ],
    correct: 0,
    fact: "Chhoti Laxmi and Ghar Ka Chirag are the true heartbeat of their home!"
  },
  {
    question: "What is the secret recipe behind 25 glorious years of marriage?",
    options: [
      "Unconditional love, respect and laughter",
      "Listening to each other with patience",
      "Being best friends forever",
      "All of the above!"
    ],
    correct: 3,
    fact: "25 years of friendship, trust, and unconditional devotion!"
  }
];

let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function initQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  renderQuestion();
}

function renderQuestion() {
  quizAnswered = false;
  const container = document.getElementById('quiz-container');
  if (!container) return;

  if (currentQuizIndex >= quizData.length) {
    // Show Quiz Results
    let badge = "❤️ Family Champion!";
    let desc = "You know Mom & Dad inside out! Their love inspires all of us!";
    if (quizScore < quizData.length / 2) {
      badge = "✨ Sweet Admirer!";
      desc = "You know their love story is legendary. Go ask them for more stories!";
    }

    container.innerHTML = `
      <div class="text-center py-8 px-4 animate-fade-in">
        <div class="text-6xl mb-4">🏆</div>
        <h3 class="text-2xl font-bold font-serif-luxury text-rose-800 mb-2">${badge}</h3>
        <p class="text-gray-600 mb-4">${desc}</p>
        <div class="inline-block bg-rose-50 border-2 border-rose-200 rounded-full px-6 py-2 text-rose-700 font-bold text-lg mb-6">
          Your Score: ${quizScore} / ${quizData.length}
        </div>
        <div>
          <button onclick="initQuiz()" class="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-rose-300 hover:scale-105 transition-all">
            Play Again 🔄
          </button>
          <button onclick="triggerConfetti()" class="ml-3 px-6 py-2.5 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:shadow-amber-200 hover:scale-105 transition-all">
            Shower Confetti 🎊
          </button>
        </div>
      </div>
    `;
    if (typeof confetti === 'function') {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
    return;
  }

  const q = quizData[currentQuizIndex];
  container.innerHTML = `
    <div>
      <div class="flex justify-between items-center text-xs font-semibold text-rose-600 uppercase tracking-wider mb-3">
        <span>Question ${currentQuizIndex + 1} of ${quizData.length}</span>
        <span>Score: ${quizScore}</span>
      </div>
      <h3 class="text-xl md:text-2xl font-serif-luxury text-gray-800 font-bold mb-6">${q.question}</h3>
      <div class="space-y-3 mb-6" id="quiz-options">
        ${q.options.map((opt, i) => `
          <button onclick="handleQuizAnswer(${i})" class="quiz-opt-btn w-full text-left p-4 rounded-xl border border-rose-100 bg-white/80 hover:bg-rose-50 hover:border-rose-300 transition-all font-medium text-gray-700 shadow-sm flex items-center justify-between group">
            <span>${opt}</span>
            <span class="text-rose-400 group-hover:translate-x-1 transition-transform">➜</span>
          </button>
        `).join('')}
      </div>
      <div id="quiz-feedback" class="hidden p-4 rounded-xl text-sm font-medium"></div>
    </div>
  `;
}

function handleQuizAnswer(index) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = quizData[currentQuizIndex];
  const buttons = document.querySelectorAll('.quiz-opt-btn');
  const feedback = document.getElementById('quiz-feedback');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.remove('bg-white/80', 'border-rose-100');
      btn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-800', 'font-bold');
    } else if (i === index) {
      btn.classList.remove('bg-white/80', 'border-rose-100');
      btn.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-800');
    }
  });

  if (index === q.correct) {
    quizScore++;
    feedback.className = "p-4 rounded-xl text-sm font-medium bg-emerald-100 text-emerald-800 border border-emerald-300 mb-4 animate-fade-in";
    feedback.innerHTML = `🎉 <strong>Spot on!</strong> ${q.fact}`;
    if (typeof playChimeSound === 'function') playChimeSound(600);
  } else {
    feedback.className = "p-4 rounded-xl text-sm font-medium bg-amber-50 text-amber-800 border border-amber-300 mb-4 animate-fade-in";
    feedback.innerHTML = `💖 <strong>Sweet guess!</strong> ${q.fact}`;
  }
  feedback.classList.remove('hidden');

  setTimeout(() => {
    currentQuizIndex++;
    renderQuestion();
  }, 1800);
}


// ===================================================================
// Game 2: Memory Match ("Love Pairs")
// ===================================================================
const memoryIcons = [
  { icon: "💍", label: "Rings" },
  { icon: "🌹", label: "Roses" },
  { icon: "👑", label: "Crowns" },
  { icon: "☕", label: "Chai" },
  { icon: "👧", label: "Laxmi" },
  { icon: "👦", label: "Chirag" },
  { icon: "🕊️", label: "Doves" },
  { icon: "💖", label: "Forever" }
];

let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let memoryMoves = 0;
let memoryTimer = 0;
let memoryTimerInterval = null;

function initMemoryGame() {
  const grid = document.getElementById('memory-grid');
  if (!grid) return;

  clearInterval(memoryTimerInterval);
  memoryMoves = 0;
  matchedPairs = 0;
  memoryTimer = 0;
  flippedCards = [];

  document.getElementById('memory-moves').innerText = '0';
  document.getElementById('memory-time').innerText = '00:00';

  // Duplicate and shuffle
  const deck = [...memoryIcons, ...memoryIcons]
    .sort(() => Math.random() - 0.5);

  grid.innerHTML = '';
  deck.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.index = index;
    card.dataset.icon = item.icon;
    card.innerHTML = `
      <div class="memory-card-inner">
        <div class="memory-card-front">
          <span class="text-2xl text-rose-300">💖</span>
        </div>
        <div class="memory-card-back">
          <span class="text-3xl">${item.icon}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => handleCardFlip(card));
    grid.appendChild(card);
  });

  memoryTimerInterval = setInterval(() => {
    memoryTimer++;
    const mins = String(Math.floor(memoryTimer / 60)).padStart(2, '0');
    const secs = String(memoryTimer % 60).padStart(2, '0');
    const timeEl = document.getElementById('memory-time');
    if (timeEl) timeEl.innerText = `${mins}:${secs}`;
  }, 1000);
}

function handleCardFlip(card) {
  if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) {
    return;
  }

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    memoryMoves++;
    const movesEl = document.getElementById('memory-moves');
    if (movesEl) movesEl.innerText = memoryMoves;

    const [card1, card2] = flippedCards;
    if (card1.dataset.icon === card2.dataset.icon) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      matchedPairs++;
      flippedCards = [];

      if (typeof playChimeSound === 'function') playChimeSound(750);

      if (matchedPairs === memoryIcons.length) {
        clearInterval(memoryTimerInterval);
        setTimeout(() => {
          if (typeof confetti === 'function') confetti();
          alert(`🎉 Outstanding! You matched all pairs in ${memoryMoves} moves and ${memoryTimer} seconds! Happy 25th Anniversary Pankaj & Pooja!`);
        }, 500);
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
      }, 900);
    }
  }
}


// ===================================================================
// Game 3: Spin the Wheel ("Couple Dares & Memories")
// ===================================================================
const wheelSegments = [
  { text: "Wedding Pose", color: "#fda4af", dare: "Recreate your first wedding photo pose right now!" },
  { text: "3 Compliments", color: "#fbcfe8", dare: "Pankaj: Give Pooja 3 romantic compliments in 15 seconds!" },
  { text: "Slow Dance", color: "#fed7aa", dare: "Mom & Dad: Slow dance to your favorite romantic song!" },
  { text: "Sweetest Habit", color: "#fef08a", dare: "Pooja: Tell everyone Pankaj's sweetest everyday habit!" },
  { text: "Family Bear Hug", color: "#bbf7d0", dare: "All 4 together: Chhoti Laxmi & Ghar Ka Chirag give Mom & Dad a mega hug!" },
  { text: "Sing 2 Lines", color: "#a5f3fc", dare: "Pankaj: Sing 2 lines of Mom's favorite 90s/2000s song!" },
  { text: "Sweet Secret", color: "#ddd6fe", dare: "Share the funniest or cutest moment from your 2001 Wedding Day!" },
  { text: "Love Vows 2.0", color: "#fbcfe8", dare: "Make one new funny or romantic vow for the next 25 years!" }
];

let wheelAngle = 0;
let isSpinning = false;

function drawWheel() {
  const canvas = document.getElementById('wheel-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const numSegs = wheelSegments.length;
  const arcSize = (2 * Math.PI) / numSegs;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = cx - 15;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  wheelSegments.forEach((seg, i) => {
    const angle = wheelAngle + i * arcSize;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, angle, angle + arcSize);
    ctx.fillStyle = seg.color;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle + arcSize / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(seg.text, radius - 20, 5);
    ctx.restore();
  });

  // Center Circle Pin
  ctx.beginPath();
  ctx.arc(cx, cy, 32, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#e11d48';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.font = 'bold 15px serif';
  ctx.fillStyle = '#e11d48';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('25th', cx, cy);
}

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  const spinBtn = document.getElementById('spin-btn');
  if (spinBtn) spinBtn.disabled = true;

  const totalRotations = 5 + Math.random() * 5;
  const targetAngle = wheelAngle + totalRotations * 2 * Math.PI + Math.random() * 2 * Math.PI;
  const duration = 4000;
  const start = performance.now();
  const initialAngle = wheelAngle;

  function animate(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    wheelAngle = initialAngle + (targetAngle - initialAngle) * easeOut;
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      isSpinning = false;
      if (spinBtn) spinBtn.disabled = false;
      calculateWheelResult();
    }
  }

  requestAnimationFrame(animate);
}

function calculateWheelResult() {
  const numSegs = wheelSegments.length;
  const arcSize = (2 * Math.PI) / numSegs;
  // Pointer is at the top (3*PI/2)
  const normalizedAngle = (3 * Math.PI / 2 - (wheelAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const index = Math.floor(normalizedAngle / arcSize) % numSegs;
  const result = wheelSegments[index];

  const resultModal = document.getElementById('wheel-result-modal');
  const resultText = document.getElementById('wheel-result-text');
  if (resultModal && resultText) {
    resultText.innerHTML = `
      <div class="text-4xl mb-3">💖</div>
      <h4 class="text-xl font-bold font-serif-luxury text-rose-800 mb-2">${result.text}</h4>
      <p class="text-gray-700 text-base font-medium">${result.dare}</p>
    `;
    resultModal.classList.remove('hidden');
    resultModal.classList.add('flex');
    if (typeof confetti === 'function') confetti();
  }
}

function closeWheelModal() {
  const resultModal = document.getElementById('wheel-result-modal');
  if (resultModal) {
    resultModal.classList.add('hidden');
    resultModal.classList.remove('flex');
  }
}


// ===================================================================
// Game 4: Heart Catcher Arcade Mini-Game
// ===================================================================
let catcherGameActive = false;
let catcherScore = 0;
let catcherTimeLeft = 30;
let catcherInterval = null;
let catcherAnimationId = null;

let basketX = 175;
const basketWidth = 70;
const basketHeight = 25;
let fallingItems = [];

function initHeartCatcher() {
  const canvas = document.getElementById('catcher-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  catcherScore = 0;
  catcherTimeLeft = 30;
  fallingItems = [];
  basketX = canvas.width / 2 - basketWidth / 2;

  document.getElementById('catcher-score').innerText = '0';
  document.getElementById('catcher-timer').innerText = '30s';
  document.getElementById('catcher-start-btn').classList.add('hidden');

  catcherGameActive = true;

  // Mouse / Touch events for basket
  function moveBasket(clientX) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const x = (clientX - rect.left) * scaleX;
    basketX = Math.max(0, Math.min(canvas.width - basketWidth, x - basketWidth / 2));
  }

  canvas.onmousemove = (e) => moveBasket(e.clientX);
  canvas.ontouchstart = (e) => {
    if (e.touches[0]) {
      e.preventDefault();
      moveBasket(e.touches[0].clientX);
    }
  };
  canvas.ontouchmove = (e) => {
    if (e.touches[0]) {
      e.preventDefault();
      moveBasket(e.touches[0].clientX);
    }
  };

  clearInterval(catcherInterval);
  catcherInterval = setInterval(() => {
    catcherTimeLeft--;
    const timerEl = document.getElementById('catcher-timer');
    if (timerEl) timerEl.innerText = `${catcherTimeLeft}s`;

    if (catcherTimeLeft <= 0) {
      endHeartCatcher();
    }
  }, 1000);

  lastItemTime = performance.now();
  runCatcherLoop();
}

let lastItemTime = 0;

function runCatcherLoop() {
  if (!catcherGameActive) return;
  const canvas = document.getElementById('catcher-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Spawn items
  const now = performance.now();
  if (now - lastItemTime > 400) {
    lastItemTime = now;
    const types = [
      { emoji: '💖', points: 10, speed: 2.5 },
      { emoji: '💍', points: 25, speed: 3.2 },
      { emoji: '🌹', points: 15, speed: 2.8 },
      { emoji: '✨', points: 10, speed: 2.2 }
    ];
    const picked = types[Math.floor(Math.random() * types.length)];
    fallingItems.push({
      x: 20 + Math.random() * (canvas.width - 40),
      y: -20,
      emoji: picked.emoji,
      points: picked.points,
      speed: picked.speed
    });
  }

  // Draw Basket (cute gift box / basket)
  ctx.fillStyle = '#e11d48';
  ctx.beginPath();
  ctx.roundRect(basketX, canvas.height - basketHeight - 10, basketWidth, basketHeight, 8);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = '12px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('P & P 💖', basketX + basketWidth / 2, canvas.height - 18);

  // Update and draw items
  for (let i = fallingItems.length - 1; i >= 0; i--) {
    const item = fallingItems[i];
    item.y += item.speed;

    ctx.font = '24px serif';
    ctx.textAlign = 'center';
    ctx.fillText(item.emoji, item.x, item.y);

    // Collision with basket
    if (
      item.y >= canvas.height - basketHeight - 20 &&
      item.y <= canvas.height - 5 &&
      item.x >= basketX - 10 &&
      item.x <= basketX + basketWidth + 10
    ) {
      catcherScore += item.points;
      const scoreEl = document.getElementById('catcher-score');
      if (scoreEl) scoreEl.innerText = catcherScore;
      fallingItems.splice(i, 1);
      continue;
    }

    // Off screen
    if (item.y > canvas.height + 30) {
      fallingItems.splice(i, 1);
    }
  }

  catcherAnimationId = requestAnimationFrame(runCatcherLoop);
}

function endHeartCatcher() {
  catcherGameActive = false;
  clearInterval(catcherInterval);
  if (catcherAnimationId) cancelAnimationFrame(catcherAnimationId);

  const startBtn = document.getElementById('catcher-start-btn');
  if (startBtn) {
    startBtn.innerText = 'Play Again 🎮';
    startBtn.classList.remove('hidden');
  }

  if (typeof confetti === 'function') confetti();
  alert(`🎊 Game Over! Love Score: ${catcherScore} Points! You collected endless love for Pankaj & Pooja!`);
}

// Window bindings
window.initQuiz = initQuiz;
window.handleQuizAnswer = handleQuizAnswer;
window.initMemoryGame = initMemoryGame;
window.drawWheel = drawWheel;
window.spinWheel = spinWheel;
window.closeWheelModal = closeWheelModal;
window.initHeartCatcher = initHeartCatcher;
