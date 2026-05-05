const riddles = [
    { q: "You expect one thing, but the opposite occurs. A fire station burning? That's me.", options: ["Situational Irony", "Verbal Irony"], a: "Situational Irony" },
    { q: "I mean 'belonging to it,' without a tick.", options: ["Its", "It's"], a: "Its" },
    { q: "I am the past of 'eat,' a meal that is through.", options: ["Ate", "Eaten"], a: "Ate" },
    { q: "I am a specific place, like London or Rome.", options: ["Proper Noun", "Common Noun"], a: "Proper Noun" },
    { q: "Plural of 'child'?", options: ["Childs", "Children"], a: "Children" },
    { q: "I lead the sentence as the subject. I am the 'captain'.", options: ["Who", "Whom"], a: "Who" },
    { q: "I give human traits to non-human things.", options: ["Hyperbole", "Personification"], a: "Personification" },
    { q: "I am the time and place of the story.", options: ["Conflict", "Setting"], a: "Setting" },
    { q: "The highest point of tension in a plot.", options: ["Climax", "Resolution"], a: "Climax" },
    { q: "The struggle between opposing forces.", options: ["Conflict", "Setting"], a: "Conflict" },
    { q: "Sarah or Chloe will give ___ presentation.", options: ["Her", "Their"], a: "Her" },
    { q: "Nouns joined by 'and' use which pronoun?", options: ["Singular", "Plural"], a: "Plural" },
    { q: "Possessive of one student?", options: ["Student's", "Students'"], a: "Student's" },
    { q: "I mean 'you are'—which one am I?", options: ["Your", "You're"], a: "You're" },
    { q: "A negative word meaning 'almost not'.", options: ["Scarcely", "Quickly"], a: "Scarcely" },
    { q: "Double negative: 'We didn't see nobody'.", options: ["didn't/nobody", "We/nobody"], a: "didn't/nobody" },
    { q: "I join words together like 'but' or 'and'.", options: ["Conjunction", "Adjective"], a: "Conjunction" },
    { q: "I describe a noun, like 'blue' or 'fast'.", options: ["Adjective", "Verb"], a: "Adjective" },
    { q: "I relate the noun to the rest of the sentence.", options: ["Relative Pronoun", "Verb"], a: "Relative Pronoun" },
    { q: "I express strong feelings like 'Wow!'.", options: ["Interjection", "Noun"], a: "Interjection" }
];

let progress = 0;

function runGame() {
    const r = riddles[progress];
    document.getElementById("riddle-header").innerText = `Riddle ${progress + 1}`;
    document.getElementById("riddle-prompt").innerText = r.q;
    
    const container = document.getElementById("btn-container");
    container.innerHTML = "";
    
    r.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === r.a) {
                progress++;
                if (progress === 20) {
                    document.getElementById("game-ui").classList.add("hidden");
                    document.getElementById("win-panel").classList.remove("hidden");
                } else {
                    runGame();
                }
            } else {
                document.getElementById("game-ui").classList.add("hidden");
                document.getElementById("lose-panel").classList.remove("hidden");
            }
        };
        container.appendChild(btn);
    });
}

runGame();
