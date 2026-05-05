const riddles = [
    { q: "You expect one thing, but the opposite occurs. A fire station burning? That's me, for sure.", options: ["Situational Irony", "Verbal Irony"], a: "Situational Irony" },
    { q: "I mean 'belonging to it,' without a tick. If you add an apostrophe, you've missed the trick!", options: ["Its", "It's"], a: "Its" },
    { q: "I am the past of 'eat,' a meal that is through. I rhyme with 'gate'—what am I to you?", options: ["Ate", "Eaten"], a: "Ate" },
    { q: "I am a specific place, like London or Rome. I need a capital letter to feel at home.", options: ["Proper Noun", "Common Noun"], a: "Proper Noun" },
    { q: "Plural of 'child'?", options: ["Childs", "Children"], a: "Children" }, // Riddle 24
    { q: "I lead the sentence as the subject. I am the 'captain'—what do you say?", options: ["Who", "Whom"], a: "Who" },
    { q: "I give human traits to things at a glance.", options: ["Hyperbole", "Personification"], a: "Personification" },
    { q: "I am the time and place on the map.", options: ["Conflict", "Setting"], a: "Setting" },
    { q: "The highest point of tension in the fire.", options: ["Climax", "Resolution"], a: "Climax" },
    { q: "The struggle between opposing forces.", options: ["Conflict", "Setting"], a: "Conflict" },
    { q: "Sarah or Chloe will give ___ presentation.", options: ["Her", "Their"], a: "Her" },
    { q: "Nouns joined by 'and' use which pronoun?", options: ["Singular", "Plural"], a: "Plural" },
    { q: "Apostrophe for one student's essay?", options: ["Student's", "Students'"], a: "Student's" },
    { q: "I mean 'you are'—what is my name?", options: ["Your", "You're"], a: "You're" },
    { q: "A negative word meaning 'almost not'.", options: ["Scarcely", "Quickly"], a: "Scarcely" },
    { q: "Double negative: 'We didn't see nobody'.", options: ["didn't/nobody", "We/nobody"], a: "didn't/nobody" },
    { q: "I join words together like 'but' or 'and'.", options: ["Conjunction", "Adjective"], a: "Conjunction" },
    { q: "I describe the noun until the very last.", options: ["Adjective", "Verb"], a: "Adjective" },
    { q: "I relate the noun to the rest of the crew.", options: ["Relative Pronoun", "Verb"], a: "Relative Pronoun" },
    { q: "Expressing a feeling like 'Wow!' or 'Ouch!'.", options: ["Interjection", "Noun"], a: "Interjection" }
];

let currentRiddle = 0;

function loadRiddle() {
    const r = riddles[currentRiddle];
    const quizArea = document.getElementById("quiz-area");
    
    // Reset animation
    quizArea.style.animation = 'none';
    quizArea.offsetHeight; 
    quizArea.style.animation = 'fadeIn 0.5s ease';

    document.getElementById("riddle-header").innerText = `Riddle ${currentRiddle + 1}`;
    document.getElementById("question-text").innerText = r.q;
    
    const btnGroup = document.getElementById("btn-group");
    btnGroup.innerHTML = "";
    
    r.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === r.a) {
                currentRiddle++;
                if (currentRiddle === 20) showWin(); else loadRiddle();
            } else {
                showLose();
            }
        };
        btnGroup.appendChild(btn);
    });
}

function showWin() {
    document.getElementById("game-container").classList.add("hidden");
    document.getElementById("win-screen").classList.remove("hidden");
}

function showLose() {
    document.getElementById("game-container").classList.add("hidden");
    document.getElementById("lose-screen").classList.remove("hidden");
}

loadRiddle();
