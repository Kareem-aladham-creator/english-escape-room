const questions = [
    { q: "The captain is _____?", options: ["whom", "who"], a: "who" },
    { q: "By _____ was this masterpiece painted?", options: ["who", "whom"], a: "whom" },
    { q: "The athlete _____ won the gold medal is my cousin.", options: ["who", "whom"], a: "who" },
    { q: "To _____ should the invitation be sent?", options: ["who", "whom"], a: "whom" },
    { q: "What is situational irony?", options: ["You say something but mean something else", "You expect something but something else happens"], a: "You expect something but something else happens" },
    { q: "Which device gives human traits to non-human things?", options: ["Hyperbole", "Personification"], a: "Personification" },
    { q: "What does the 'Setting' include?", options: ["Time, location, and environment", "Secondary characters"], a: "Time, location, and environment" },
    { q: "The 'Climax' of a story is:", options: ["The beginning", "Turning point of highest tension"], a: "Turning point of highest tension" },
    { q: "Conflict refers to:", options: ["Struggle between opposing forces", "Resolution"], a: "Struggle between opposing forces" },
    { q: "Either Sarah or Chloe will give ___ presentation first.", options: ["their", "her"], a: "her" },
    { q: "Nouns joined by 'and' typically use which pronoun?", options: ["Plural", "Singular"], a: "Plural" },
    { q: "Which indefinite pronoun is always plural?", options: ["Several", "Everyone"], a: "Several" },
    { q: "Correct possessive of a singular noun?", options: ["The student's essay", "The students' essay"], a: "The student's essay" },
    { q: "Which uses 'its' correctly as a possessive?", options: ["I think its going to rain.", "The tree lost all of its leaves."], a: "The tree lost all of its leaves." },
    { q: "____ going to be late for ____ flight.", options: ["You're; your", "Your; you're"], a: "You're; your" },
    { q: "Which word is a negative word that often causes errors?", options: ["Scarcely", "Quickly"], a: "Scarcely" },
    { q: "Correct: 'I don't want nothing for my birthday.'", options: ["I don't want anything for my birthday.", "I don't want none for my birthday."], a: "I don't want anything for my birthday." },
    { q: "Which is grammatically correct?", options: ["Don't have no homework", "The students have no homework today."], a: "The students have no homework today." },
    { q: "Identify the double negative: 'We didn't see nobody.'", options: ["didn't and nobody", "We and nobody"], a: "didn't and nobody" },
    { q: "Can 'any' replace 'none' in 'I haven't none'?", options: ["any", "nothing"], a: "any" }
];

let score = 0;
let currentQ = 0;

// Path Traced from Screenshot (161).png
const mazePath = [
    {t: 5, l: 4},   {t: 10, l: 4},  {t: 15, l: 4},  {t: 15, l: 14}, 
    {t: 20, l: 14}, {t: 25, l: 14}, {t: 25, l: 20}, {t: 30, l: 20}, 
    {t: 30, l: 4},  {t: 40, l: 4},  {t: 48, l: 4},  {t: 48, l: 16}, 
    {t: 58, l: 16}, {t: 68, l: 16}, {t: 68, l: 24}, {t: 75, l: 24}, 
    {t: 75, l: 4},  {t: 80, l: 4},  {t: 85, l: 4},  {t: 90, l: 4}, {t: 94, l: 4}
];

function spawnBgWords() {
    const container = document.getElementById("maze-container");
    const words = ["abc", "grammar", "verb", "noun", "quiz", "riddle"];
    for(let i=0; i<12; i++) {
        const span = document.createElement("span");
        span.innerText = words[Math.floor(Math.random() * words.length)];
        span.className = "bg-word";
        span.style.top = Math.random() * 85 + "%";
        span.style.left = Math.random() * 85 + "%";
        span.style.animationDelay = Math.random() * 4 + "s";
        container.appendChild(span);
    }
}

function spawnEmojis(containerId, emoji) {
    const container = document.getElementById(containerId);
    for(let i=0; i<15; i++) {
        const span = document.createElement("span");
        span.innerText = emoji;
        span.className = "flying-emoji";
        span.style.left = Math.random() * 100 + "vw";
        span.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(span);
    }
}

function loadQuestion() {
    const box = document.getElementById("quiz-box");
    box.classList.remove("slide-in");
    void box.offsetWidth; 
    box.classList.add("slide-in");

    if (currentQ < questions.length) {
        const qData = questions[currentQ];
        document.getElementById("riddle-title").innerText = "Riddle " + (currentQ + 1);
        document.getElementById("question-text").innerText = qData.q;
        const container = document.getElementById("options-container");
        container.innerHTML = "";
        qData.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(opt);
            container.appendChild(btn);
        });
    }
}

function checkAnswer(selected) {
    if (selected === questions[currentQ].a) {
        score++;
        currentQ++;
        const pos = mazePath[score];
        document.getElementById("character").style.top = pos.t + "%";
        document.getElementById("character").style.left = pos.l + "%";

        if (score === 20) {
            setTimeout(() => {
                document.getElementById("game-container").classList.add("hidden");
                document.getElementById("win-screen").classList.remove("hidden");
                spawnEmojis("win-emojis", "🎉");
            }, 300);
        } else {
            loadQuestion();
        }
    } else {
        document.getElementById("game-container").classList.add("hidden");
        document.getElementById("lose-screen").classList.remove("hidden");
        spawnEmojis("lose-emojis", "💔");
    }
}

function resetGame() {
    score = 0; currentQ = 0;
    const char = document.getElementById("character");
    char.style.top = mazePath[0].t + "%";
    char.style.left = mazePath[0].l + "%";
    document.getElementById("win-emojis").innerHTML = "";
    document.getElementById("lose-emojis").innerHTML = "";
    document.getElementById("win-screen").classList.add("hidden");
    document.getElementById("lose-screen").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    loadQuestion();
}

spawnBgWords();
loadQuestion();