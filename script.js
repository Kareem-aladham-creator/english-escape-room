const data = [
    { q: "A fire station burns down. What irony is this?", options: ["Situational", "Verbal"], a: "Situational" },
    { q: "The toy belongs to 'it'. How do you write it?", options: ["Its", "It's"], a: "Its" },
    { q: "Past tense of 'eat'?", options: ["Ate", "Eaten"], a: "Ate" },
    { q: "Specific names like 'London' or 'Kareem'?", options: ["Proper Noun", "Common"], a: "Proper Noun" },
    { q: "Plural of 'child'?", options: ["Childs", "Children"], a: "Children" },
    { q: "I am the 'captain' subject of the sentence.", options: ["Who", "Whom"], a: "Who" },
    { q: "Giving human traits to an object.", options: ["Simile", "Personification"], a: "Personification" },
    { q: "Where and when the story happens.", options: ["Setting", "Plot"], a: "Setting" },
    { q: "The highest point of tension in a story.", options: ["Climax", "Conflict"], a: "Climax" },
    { q: "The main struggle in a story.", options: ["Conflict", "Theme"], a: "Conflict" },
    { q: "Sarah or Chloe will give ___ talk.", options: ["Her", "Their"], a: "Her" },
    { q: "Nouns joined by 'and' are usually ___.", options: ["Singular", "Plural"], a: "Plural" },
    { q: "Possessive form of one student.", options: ["Student's", "Students'"], a: "Student's" },
    { q: "Short for 'you are'.", options: ["Your", "You're"], a: "You're" },
    { q: "Which means 'almost not'?", options: ["Scarcely", "Highly"], a: "Scarcely" },
    { q: "Negative check: 'We didn't see ___'.", options: ["nobody", "anybody"], a: "nobody" },
    { q: "I join words like 'and' or 'but'.", options: ["Conjunction", "Verb"], a: "Conjunction" },
    { q: "I describe a noun, like 'blue' or 'fast'.", options: ["Adjective", "Adverb"], a: "Adjective" },
    { q: "I relate a noun to the sentence.", options: ["Preposition", "Relative Pronoun"], a: "Relative Pronoun" },
    { q: "I express strong emotion like 'Wow!'.", options: ["Interjection", "Noun"], a: "Interjection" }
];

let current = 0;

function load() {
    const r = data[current];
    document.getElementById("q-label").innerText = `Riddle ${current + 1}`;
    document.getElementById("q-text").innerText = r.q;
    const area = document.getElementById("opt-btns");
    area.innerHTML = "";
    
    r.options.forEach(o => {
        const b = document.createElement("button");
        b.innerText = o;
        b.onclick = () => {
            if (o === r.a) {
                current++;
                if (current === 20) {
                    document.getElementById("game-core").classList.add("hidden");
                    document.getElementById("win-ui").classList.remove("hidden");
                } else { load(); }
            } else {
                document.getElementById("game-core").classList.add("hidden");
                document.getElementById("fail-ui").classList.remove("hidden");
            }
        };
        area.appendChild(b);
    });
}
load();
