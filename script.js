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
  outputText.style.color = "#fff"; // visible on dark background
}

// Attach click event
document.getElementById("translateBtn").addEventListener("click", translateText);
