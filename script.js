const questions = [
    { q: "You expect one thing, but the opposite occurs. A fire station burning? That's me, for sure.", options: ["Situational Irony", "Verbal Irony"], a: "Situational Irony" },
    { q: "I am not 'your,' though we sound just the same. I mean 'you are'—what is my name?", options: ["Your", "You're"], a: "You're" },
    { q: "I lead the sentence as the subject of the play. I am the 'captain'—what do you say?", options: ["Who", "Whom"], a: "Who" },
    { q: "I make the wind whisper and the trees start to dance. I give human life to things at a glance.", options: ["Hyperbole", "Personification"], a: "Personification" },
    { q: "I am the time of day and the place on the map. I hold the story's world right in my lap.", options: ["Conflict", "Setting"], a: "Setting" },
    { q: "I am the highest point, the heat of the fire. The moment of tension that couldn't get higher.", options: ["Climax", "Resolution"], a: "Climax" },
    { q: "I am the battle between two sides in a book. Without my struggle, there’s no reason to look.", options: ["Conflict", "Setting"], a: "Conflict" },
    { q: "When Sarah or Chloe speaks, they use me alone. I’m the singular pronoun they claim as their own.", options: ["Her", "Their"], a: "Her" },
    { q: "When 'and' joins two nouns, we become a team. Which pronoun type fits this pluralized dream?", options: ["Singular", "Plural"], a: "Plural" },
    { q: "I belong to one student, an essay so fine. Where does my apostrophe mark the line?", options: ["Student's", "Students'"], a: "Student's" },
    { q: "I am a negative word, quiet and rare. I mean 'almost not,' like a ghost in the air.", options: ["Scarcely", "Quickly"], a: "Scarcely" },
    { q: "Identify the double negative: 'We didn't see nobody.'", options: ["didn't and nobody", "We and nobody"], a: "didn't and nobody" },
    { q: "I am a specific place, like London or Rome. I need a capital letter to feel at home.", options: ["Proper Noun", "Common Noun"], a: "Proper Noun" },
    { q: "I am the past of 'eat,' a meal that is through. I rhyme with 'gate'—what am I to you?", options: ["Ate", "Eaten"], a: "Ate" },
    { q: "One of me is a 'child,' but more is a crowd. We rhyme with 'men'—say it out loud!", options: ["Childs", "Children"], a: "Children" },
    { q: "I join words together, like 'but' or 'and.' I am the bridge that helps the sentence stand.", options: ["Conjunction", "Adjective"], a: "Conjunction" },
    { q: "I am a word like 'beautiful' or 'fast.' I describe the noun until the very last.", options: ["Adjective", "Verb"], a: "Adjective" },
    { q: "I mean 'belonging to it,' without a tick. If you add an apostrophe, you've missed the trick!", options: ["Its", "It's"], a: "Its" },
    { q: "I am a bridge between ideas, starting with 'wh-'. I relate the noun to the rest of the crew.", options: ["Relative Pronoun", "Verb"], a: "Relative Pronoun" },
    { q: "I am a feeling expressed in a word. 'Wow!' or 'Ouch!' are the sounds often heard.", options: ["Interjection", "Noun"], a: "Interjection" }
];

let score = 0;
let currentQ = 0;

function checkAnswer(selected) {
    if (selected === questions[currentQ].a) {
        score++;
        currentQ++;
        
        // WIN BUG FIX: Checks if score is 20
        if (score >= 20) {
            showWinScreen();
        } else {
            loadQuestion();
        }
    } else {
        showLoseScreen();
    }
}

function showWinScreen() {
    document.getElementById("game-container").classList.add("hidden");
    const winScreen = document.getElementById("win-screen");
    winScreen.classList.remove("hidden");
    // Ensure only the trophy is here
    winScreen.innerHTML = "<h1>You Win! 🏆</h1><button onclick='resetGame()'>Play Again</button>";
}
