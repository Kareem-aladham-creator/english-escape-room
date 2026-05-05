const riddles = [
    { q: "You expect one thing, but the opposite occurs. A fire station burning? That's me, for sure.", options: ["Situational Irony", "Verbal Irony"], a: "Situational Irony" },
    { q: "I mean 'belonging to it,' without a tick. If you add an apostrophe, you've missed the trick!", options: ["Its", "It's"], a: "Its" }, // Riddle 20
    { q: "I am the past of 'eat,' a meal that is through. I rhyme with 'gate'—what am I to you?", options: ["Ate", "Eaten"], a: "Ate" }, // Riddle 21
    { q: "I am a specific place, like London or Rome. I need a capital letter to feel at home.", options: ["Proper Noun", "Common Noun"], a: "Proper Noun" }, // Riddle 22
    { q: "Plural of 'child'?", options: ["Childs", "Children"], a: "Children" }, // Riddle 24
    { q: "I lead the sentence as the subject. I am the 'captain'—who am I?", options: ["Who", "Whom"], a: "Who" },
    { q: "I give human traits to non-human things.", options: ["Hyperbole", "Personification"], a: "Personification" },
    { q: "I am the time and place of the story.", options: ["Conflict", "Setting"], a: "Setting" },
    { q: "The highest point of tension in a plot.", options: ["Climax", "Resolution"], a: "Climax" },
    { q: "The struggle between opposing forces.", options: ["Conflict", "Setting"], a: "Conflict" },
    { q: "Sarah or Chloe will give ___ presentation.", options: ["Her", "Their"], a: "Her" },
    { q: "Nouns joined by 'and' use which pronoun?", options: ["Singular", "Plural"], a: "Plural" },
    { q: "Possessive of one student?", options: ["Student's", "Students'"], a: "Student's" },
    { q: "I mean 'you are'—which one am I?", options: ["Your", "You're"], a: "You're" },
    { q: "A negative word meaning 'almost not'.", options: ["Scarcely", "Quickly"], a: "Scarcely" },
    { q: "Double negative: 'We didn't see nobody'.", options: ["didn't and nobody", "We and nobody"], a: "didn't and nobody" },
    { q: "I join words together like 'but' or 'and'.", options: ["Conjunction", "Adjective"], a: "Conjunction" },
    { q: "I describe a noun, like 'blue' or 'fast'.", options: ["Adjective", "Verb"], a: "Adjective" },
    { q: "I relate the noun to the rest of the sentence.", options: ["Relative Pronoun", "Verb"], a: "Relative Pronoun" },
    { q: "I express strong feelings like 'Wow!'.", options: ["Interjection", "Noun"], a: "Interjection" }
];

let currentIndex = 0;

function loadNext() {
    const data = riddles[currentIndex];
    const box = document.getElementById("riddle-box");
    
    // Reset animation
    box.style.animation = 'none';
    box.offsetHeight; // Trigger reflow
    box.style.animation = 'fadeIn 0.6s ease-out';

    document.getElementById("riddle-number").innerText = `Riddle ${currentIndex + 1}`;
    document.getElementById("riddle-text").innerText = data.q;
    
    const optionsContainer = document.getElementById("options-group");
    optionsContainer.innerHTML = "";
    
    data.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === data.a) {
                currentIndex++;
                if (currentIndex === 20) {
                    // WIN TRIGGER: Shows ONLY trophy screen
                    document.getElementById("game-wrapper").classList.add("hidden");
                    document.getElementById("victory-panel").classList.remove("hidden");
                } else {
                    loadNext();
                }
            } else {
                // LOSE TRIGGER: Shows heartbreak screen
                document.getElementById("game-wrapper").classList.add("hidden");
                document.getElementById("fail-panel").classList.remove("hidden");
            }
        };
        optionsContainer.appendChild(btn);
    });
}

loadNext();
