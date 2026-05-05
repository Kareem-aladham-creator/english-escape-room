// === GAME DATA: THE 20 ENGLISH RIDDLES ===
const questions = [
    { q: "I have words, but I never speak. I have a spine, but I have no bones. What am I?", options: ["A dictionary", "A book", "A teacher", "A newspaper"], answer: 1 },
    { q: "I am tall when I'm young, and I'm short when I'm old. What am I?", options: ["A tree", "A building", "A candle", "A shadow"], answer: 2 },
    { q: "What has keys but can't open locks?", options: ["A piano", "A map", "A safe", "A car"], answer: 0 },
    { q: "Which letter of the alphabet has the most water?", options: ["C", "O", "W", "S"], answer: 0 },
    { q: "What comes once in a minute, twice in a moment, but never in a thousand years?", options: ["The letter A", "The letter M", "The sun", "A clock"], answer: 1 },
    { q: "What has to be broken before you can use it?", options: ["A coconut", "A secret", "A promise", "An egg"], answer: 3 },
    { q: "What has a head and a tail but no body?", options: ["A snake", "A coin", "A comet", "A rope"], answer: 1 },
    { q: "I begin with T, end with T, and have T in me. What am I?", options: ["A tent", "A teapot", "A target", "A toast"], answer: 1 },
    { q: "What belongs to you, but other people use it more than you do?", options: ["Your house", "Your money", "Your name", "Your phone"], answer: 2 },
    { q: "If I have it, I don't share it. If I share it, I don't have it. What is it?", options: ["A secret", "A dream", "A thought", "A meal"], answer: 0 },
    { q: "What goes up but never comes down?", options: ["A balloon", "A bird", "Your age", "An airplane"], answer: 2 },
    { q: "What gets wetter as it dries?", options: ["A sponge", "A towel", "A cloud", "A river"], answer: 1 },
    { q: "What has hands but cannot clap?", options: ["A robot", "A statue", "A tree", "A clock"], answer: 3 },
    { q: "What month of the year has 28 days?", options: ["February", "December", "All of them", "None of them"], answer: 2 },
    { q: "What has many teeth, but can't bite?", options: ["A zipper", "A gear", "A comb", "A saw"], answer: 2 },
    { q: "What has an eye but cannot see?", options: ["A needle", "A storm", "A potato", "All of these"], answer: 3 },
    { q: "What word is spelled wrong in the dictionary?", options: ["Mistake", "Error", "Wrong", "Incorrect"], answer: 2 },
    { q: "I have branches, but no fruit, trunk or leaves. What am I?", options: ["A bank", "A river", "A road", "A family tree"], answer: 0 },
    { q: "The more of this there is, the less you see. What is it?", options: ["Light", "Fog", "Darkness", "Air"], answer: 2 },
    { q: "What starts with an E, ends with an E, but only contains one letter?", options: ["An envelope", "An eagle", "An engine", "An eye"], answer: 0 }
];

// === VARIABLES ===
let currentQuestion = 0;
let lives = 3;

// === MAZE LOGIC ===
const mazePath = [0, 1, 2, 3, 4, 9, 8, 7, 6, 5, 10, 11, 12, 13, 14, 19, 18, 17, 16, 15];
const mazeBoard = document.getElementById('maze-board');
let cells = [];

for (let i = 0; i < 20; i++) {
    const cell = document.createElement('div');
    cell.classList.add('maze-cell');
    mazeBoard.appendChild(cell);
    cells.push(cell);
}

function updateMaze() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('active');
    });
    cells[mazePath[19]].innerHTML = '🏁';
    
    if (currentQuestion < 20) {
        const currentSpot = mazePath[currentQuestion];
        cells[currentSpot].classList.add('active');
        cells[currentSpot].innerHTML = '🏃‍♂️';
    } else {
        cells[mazePath[19]].classList.add('active');
        cells[mazePath[19]].innerHTML = '🏃‍♂️🏁';
    }
}

// === VISUAL EFFECTS LOGIC ===
function showEffect(emoji, className) {
    const effect = document.createElement('div');
    effect.innerText = emoji;
    effect.classList.add(className);
    if(className === 'firework') {
        effect.style.left = Math.random() * 80 + 10 + '%';
        effect.style.top = Math.random() * 80 + 10 + '%';
    }
    document.body.appendChild(effect);
    setTimeout(() => { effect.remove(); }, 1500);
}

// === CORE GAME LOGIC ===
function loadQuestion() {
    if (currentQuestion >= 20) {
        winGame();
        return;
    }

    const q = questions[currentQuestion];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    // Trigger Fade Animation
    questionText.classList.remove('fade-in');
    optionsContainer.classList.remove('fade-in');
    void questionText.offsetWidth; 
    questionText.classList.add('fade-in');
    optionsContainer.classList.add('fade-in');

    questionText.innerText = q.q;
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('progress-text').innerText = `Question: ${currentQuestion + 1}/20`;
    updateMaze();
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
        // Correct!
        currentQuestion++;
        loadQuestion();
    } else {
        // Wrong!
        lives--;
        updateLivesDisplay();
        showEffect('💔', 'heartbreak');
        
        if (lives <= 0) {
            loseGame();
        }
    }
}

function updateLivesDisplay() {
    let hearts = '';
    for(let i=0; i<lives; i++) hearts += '❤️';
    for(let i=0; i<(3-lives); i++) hearts += '🖤';
    document.getElementById('lives-text').innerText = `Lives: ${hearts}`;
}

function winGame() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('win-screen').style.display = 'block';
    updateMaze();
    for(let i = 0; i < 15; i++) {
        setTimeout(() => showEffect('🎆', 'firework'), i * 200);
    }
}

function loseGame() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('lose-screen').style.display = 'block';
}

// Start the game immediately
loadQuestion();
