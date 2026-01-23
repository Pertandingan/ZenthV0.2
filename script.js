// Full Zenth alphabet mapping
const zenthAlphabet = {
  "a": "𐊜", "b": "𐊗", "c": "𐊍", "d": "𐊅", "e": "𐊴",
  "f": "𐊇", "g": "𐊈", "h": "𐊉", "i": "𐊡", "j": "𐊊",
  "k": "𐊋", "l": "𐊠", "m": "𐊓", "n": "𐊧", "o": "𐊵",
  "p": "𐊔", "q": "𐊕", "r": "𐊽", "s": "𐊢", "t": "𐊑",
  "u": "𐊫", "v": "𐊶", "w": "𐊘", "x": "𐊙", "y": "𐊚", "z": "𐊂",
  "A": "𐊜", "B": "𐊗", "C": "𐊍", "D": "𐊅", "E": "𐊴",
  "F": "𐊇", "G": "𐊈", "H": "𐊉", "I": "𐊡", "J": "𐊊",
  "K": "𐊋", "L": "𐊠", "M": "𐊓", "N": "𐊧", "O": "𐊵",
  "P": "𐊔", "Q": "𐊕", "R": "𐊽", "S": "𐊢", "T": "𐊑",
  "U": "𐊫", "V": "𐊶", "W": "𐊘", "X": "𐊙", "Y": "𐊚", "Z": "𐊂"
};

// Reverse mapping for Zenth → English
const reverseZenth = {};
for (let key in zenthAlphabet) {
  reverseZenth[zenthAlphabet[key]] = key.toLowerCase();
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const translateBtn = document.getElementById("translate");
const languageSelect = document.getElementById("language");
const loreText = document.getElementById("lore-text");
const jumpscare = document.getElementById("jumpscare");

// Horror ARG lore messages
const loreMessages = [
  "They are watching you…",
  "Every letter you type echoes in the void.",
  "The glyphs hunger for your attention.",
  "He sees you… always watching.",
  "You shouldn’t have come here.",
  "The text is alive…"
];

// Translate function
function translateText(text, lang) {
  if (lang === "en") { // English → Zenth
    return text.split("").map(c => zenthAlphabet[c] || c).join("");
  } else { // Zenth → English
    return text.split("").map(c => reverseZenth[c] || c).join("");
  }
}

// Jumpscare chance
function maybeJumpscare() {
  if (Math.random() < 0.15) { // 15% chance
    jumpscare.style.display = "block";
    setTimeout(() => { jumpscare.style.display = "none"; }, 1500);
  }
}

translateBtn.addEventListener("click", () => {
  const lang = languageSelect.value;
  const text = input.value;
  output.value = translateText(text, lang);

  // Update horror lore
  loreText.textContent = loreMessages[Math.floor(Math.random() * loreMessages.length)];

  // Chance for jumpscare
  maybeJumpscare();
});
