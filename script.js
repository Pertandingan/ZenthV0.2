// Zenth alphabet
const zenthMap = {
  a:"𐊜", b:"𐊗", c:"𐊍", d:"𐊅", e:"𐊴",
  f:"𐊇", g:"𐊈", h:"𐊉", i:"𐊡", j:"𐊊",
  k:"𐊋", l:"𐊠", m:"𐊓", n:"𐊧", o:"𐊵",
  p:"𐊔", q:"𐊕", r:"𐊽", s:"𐊢", t:"𐊑",
  u:"𐊫", v:"𐊶", w:"𐊘", x:"𐊙", y:"𐊚",
  z:"𐊂"
};

// Reverse map ONLY glyphs
const reverseZenth = {};
for (const key in zenthMap) {
  reverseZenth[zenthMap[key]] = key;
}

// Any → Zenth overlay
function toZenthOverlay(text) {
  return text.split("").map(c => {
    const lower = c.toLowerCase();
    return zenthMap[lower] || c;
  }).join("");
}

// Zenth → English (FIXED)
function fromZenth(text) {
  return text.split("").map(c => {
    return reverseZenth[c] || c;
  }).join("");
}

// MAIN
function translateText() {
  const input = document.getElementById("inputText").value;
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
    output.textContent = "Zenth awaits your words.";
    return;
  }

  let result;

  if (from === "zenth" && to === "english") {
    result = fromZenth(input);
  } else {
    result = toZenthOverlay(input);
  }

  output.textContent = result;
}


