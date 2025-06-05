
const quotes = [
  "You’re not late. You’re aligned.",
  "You’ve already finished 3 subjects — that’s a WIN.",
  "You were built for this."
];
const flashcards = [
  "Your brain is in beast mode. I’m just here with the snacks and love.",
  "Synapses snapping. Focus locked. I see you, Dr. Main Character.",
  "Grind now, flex in the white coat later.",
  "You’re not behind. You’re just building momentum, baby.",
  "Board prep is temporary. Your doctor era? Forever.",
  "It’s okay to rest. Your future isn’t going anywhere.",
  "You’re not doing this alone. I’m in your corner, always."
];

document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

function nextFlashcard() {
  const card = document.getElementById("flashcard");
  card.innerText = flashcards[Math.floor(Math.random() * flashcards.length)];
}
flashcardEl.classList.remove("fade-in");
setTimeout(() => {
  flashcardEl.innerText = flashcards[newIndex];
  flashcardEl.classList.add("fade-in");
}, 150);
