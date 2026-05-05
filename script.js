const deck = [
    { q: "Opposite of expectations? (e.g. fire station burning)", options: ["Situational Irony", "Verbal Irony"], a: "Situational Irony" },
    { q: "Belonging to 'it'?", options: ["Its", "It's"], a: "Its" },
    { q: "Past of 'eat'?", options: ["Ate", "Eaten"], a: "Ate" },
    { q: "Names like 'London' or 'Kareem'?", options: ["Proper Noun", "Common Noun"], a: "Proper Noun" },
    { q: "Plural of 'child'?", options: ["Childs", "Children"], a: "Children" },
    { q: "Subject 'captain' pronoun?", options: ["Who", "Whom"], a: "Who" },
    { q: "Human traits for objects?", options: ["Personification", "Simile"], a: "Personification" },
    { q: "Where/When the story happens?", options: ["Setting", "Conflict"], a: "Setting" },
    { q: "Peak tension in a story?", options: ["Climax", "Resolution"], a: "Climax" },
    { q: "The main struggle?", options: ["Conflict", "Theme"], a: "Conflict" },
    { q: "Sarah will give ___ speech.", options: ["Her", "Their"], a: "Her" },
    { q: "Words joined by 'and'?", options: ["Singular", "Plural"], a: "Plural" },
    { q: "One student's book.", options: ["Student's", "Students'"], a: "Student's" },
    { q: "Short for 'you are'.", options: ["Your", "You're"], a: "You're" },
    { q: "Means 'almost not'.", options: ["Scarcely", "Hardly"], a: "Scarcely" },
    { q: "Double negative: 'didn't see ___'.", options: ["nobody", "anybody"], a: "nobody" },
    { q: "Joins words like 'but'.", options: ["Conjunction", "Adjective"], a: "Conjunction" },
    { q: "Describes the noun.", options: ["Adjective", "Verb"], a: "Adjective" },
    { q: "Relates noun to sentence.", options: ["Relative Pronoun", "Verb"], a: "Relative Pronoun" },
    { q: "Expresses 'Wow!'.", options: ["Interjection", "Noun"], a: "Interjection" }
];

let stage = 0;

function render() {
    const r = deck[stage];
    document.getElementById("counter").innerText = `Riddle ${stage + 1}`;
    document.getElementById("prompt").innerText = r.q;
    const grid = document.getElementById("button-grid");
    grid.innerHTML = "";
    
    r.options.forEach(o => {
        const b = document.createElement("button");
        b.innerText = o;
        b.onclick = () => {
            if (o === r.a) {
                stage++;
                if (stage === 20) {
                    document.getElementById("game-deck").classList.add("ui-hidden");
                    document.getElementById("win-modal").classList.remove("ui-hidden");
                } else { render(); }
            } else {
                document.getElementById("game-deck").classList.add("ui-hidden");
                document.getElementById("fail-modal").classList.remove("ui-hidden");
            }
        };
        grid.appendChild(b);
    });
}
render();
