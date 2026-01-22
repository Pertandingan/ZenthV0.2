/* =========================
   LANGUAGE LIST (UI ONLY)
========================= */

const languages = {
  auto: "Detect language",
  english: "English",
  spanish: "Spanish",
  french: "French",
  german: "German",
  italian: "Italian",
  portuguese: "Portuguese",
  russian: "Russian",
  japanese: "Japanese",
  korean: "Korean",
  chinese: "Chinese",
  arabic: "Arabic",
  hindi: "Hindi",
  zenth: "Zenth"
};

/* =========================
   ZENTH ALPHABET (ORIGINAL – WORKING)
========================= */

const zenthAlphabet = {
  "a": "𐊜", "b": "𐊗", "c": "𐊍", "d": "𐊅",
  "e": "𐊴", "f": "𐊇", "g": "𐊈", "h": "𐊉",
  "i": "𐊡", "j": "𐊊", "k": "𐊋", "l": "𐊠",
  "m": "𐊓", "n": "𐊧", "o": "𐊵", "p": "𐊔",
  "q": "𐊕", "r": "𐊽", "s": "𐊢", "t": "𐊑",
  "u": "𐊫", "v": "𐊶", "w": "𐊘", "x": "𐊙",
  "y": "𐊚", "z": "𐊂"
};

const reverseZenthAlphabet = {};
for (const letter in zenthAlphabet) {
  reverseZenthAlphabet[zenthAlphabet[letter]] = letter;
}

/* =========================
   TRANSLITERATION
========================= */

function toZenth(text) {
  return text
    .toLowerCase()
    .split("")
    .map(char => zenthAlphabet[char] || char)
    .join("");
}

function fromZenth(text) {
  return [...text]
    .map(char => reverseZenthAlphabet[char] || char)
    .join("");
}

/* =========================
   TRANSLATION HANDLER
========================= */

function translateText() {
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const input = document.getElementById("inputText").value;

  // Any language → Zenth (alphabet only)
  if (to === "zenth" && from !== "zenth") {
    setOutput(toZenth(input));
    return;
  }

  // Zenth → Any language (alphabet only)
  if (from === "zenth" && to !== "zenth") {
    setOutput(fromZenth(input));
    return;
  }

  // Zenth → Zenth
  if (from === "zenth" && to === "zenth") {
    setOutput(input);
    return;
  }

  // Non-Zenth → Non-Zenth
  setOutput("⚠️ Non-Zenth translations are not supported.");
}

function setOutput(text) {
  document.getElementById("outputText").textContent = text;
}

/* =========================
   UI SETUP
========================= */

function populateMenus() {
  const fromMenu = document.getElementById("fromLang");
  const toMenu = document.getElementById("toLang");

  for (const key in languages) {
    fromMenu.add(new Option(languages[key], key));
    toMenu.add(new Option(languages[key], key));
  }

  fromMenu.value = "english";
  toMenu.value = "zenth";
}

populateMenus();
