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
const mazePath = [{t:5,l:5},{t:12,l:5},{t:19,l:5},{t:26,l:5},{t:33,l:5},{t:40,l:5},{t:40,l:15},{t:40,l:25},{t:40,l:33},{t:40,l:40},{t:48,l:40},{t:56,l:40},{t:64,l:40},{t:70,l:40},{t:70,l:50},{t:70,l:60},{t:70,l:70},{t:70,l:80},{t:78,l:80},{t:86,l:80},{t:94,l:80}];

function loadQuestion() {
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
            }, 600);
        } else { loadQuestion(); }
    } else {
        document.getElementById("game-container").classList.add("hidden");
        document.getElementById("lose-screen").classList.remove("hidden");
    }
}

function resetGame() {
    score = 0; currentQ = 0;
    document.getElementById("character").style.top = "5%";
    document.getElementById("character").style.left = "5%";
    document.getElementById("win-screen").classList.add("hidden");
    document.getElementById("lose-screen").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    loadQuestion();
}
loadQuestion();
