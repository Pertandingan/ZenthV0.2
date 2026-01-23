// English → Zenth glyph mapping
const englishToZenth = {
  a: "𐊜", b: "𐊗", c: "𐊍", d: "𐊅", e: "𐊴",
  f: "𐊇", g: "𐊈", h: "𐊉", i: "𐊡", j: "𐊊",
  k: "𐊋", l: "𐊠", m: "𐊓", n: "𐊧", o: "𐊵",
  p: "𐊔", q: "𐊕", r: "𐊽", s: "𐊢", t: "𐊑",
  u: "𐊫", v: "𐊶", w: "𐊘", x: "𐊙", y: "𐊚", z: "𐊂",
  " ": " ", ".": ".", ",": ",", "!": "!", "?": "?"
};

// Zenth → English reverse mapping
const zenthToEnglish = {};
for (let key in englishToZenth) {
  zenthToEnglish[englishToZenth[key]] = key;
}

// Horror-style lore messages
const loreMessages = [
  "He sees you.",
  "Don't look away...",
  "Always watching...",
  "Your text betrays you...",
  "Something is here.",
  "You shouldn't be typing..."
];

// Translate function
function translateText() {
  const input = document.getElementById("inputText").value.toLowerCase();
  const mode = document.getElementById("languageSelect").value;
  let output = "";

  if (mode === "en-to-zen") {
    for (let char of input) {
      output += englishToZenth[char] || char;
    }
  } else if (mode === "zen-to-en") {
    for (let char of input) {
      output += zenthToEnglish[char] || char;
    }
  }

  const outputText = document.getElementById("outputText");
  outputText.value = output;
  outputText.style.color = "#fff";

  // Randomly trigger horror events
  triggerHorrorEvent();
}

// Random chance horror event
function triggerHorrorEvent() {
  const chance = Math.random();

  // ~10% chance for lore messages
  if (chance < 0.1) {
    showLoreMessage();
  }

  // ~2% chance for jumpscare
  if (chance >= 0.1 && chance < 0.12) {
    showJumpscare();
  }
}

// Show lore message
function showLoreMessage() {
  const message = loreMessages[Math.floor(Math.random() * loreMessages.length)];
  const div = document.createElement("div");
  div.textContent = message;
  div.style.position = "fixed";
  div.style.top = Math.random() * 80 + "%";
  div.style.left = Math.random() * 80 + "%";
  div.style.fontSize = "2em";
  div.style.color = "red";
  div.style.fontWeight = "bold";
  div.style.textShadow = "0 0 10px red, 0 0 20px black";
  div.style.zIndex = "9999";
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 2000); // disappears after 2s
}

// Show jumpscare
function showJumpscare() {
  const img = document.createElement("img");
  img.src = "scare.png.png"; // change this if your file path is different
  img.style.position = "fixed";
  img.style.top = "0";
  img.style.left = "0";
  img.style.width = "100vw";
  img.style.height = "100vh";
  img.style.zIndex = "10000";
  img.style.objectFit = "cover";
  document.body.appendChild(img);

  const audio = new Audio("JumpscareSound1.mp3");
  audio.play();

  setTimeout(() => img.remove(), 1500); // disappears after 1.5s
}

// Attach click event
document.getElementById("translateBtn").addEventListener("click", translateText);
