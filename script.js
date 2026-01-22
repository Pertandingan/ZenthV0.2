// language map
const languages = {
  english: "English",
  zenth: "Zenth",
  chinese: "Chinese",
  spanish: "Spanish",
  french: "French",
};

// Zenth glyph map
const zenthMap = {
  a: "𐊜", b: "𐊗", c: "𐊍", d: "𐊅", e: "𐊴",
  f: "𐊇", g: "𐊈", h: "𐊉", i: "𐊡", j: "𐊊",
  k: "𐊋", l: "𐊠", m: "𐊓", n: "𐊧", o: "𐊵",
  p: "𐊔", q: "𐊕", r: "𐊽", s: "𐊢", t: "𐊑",
  u: "𐊫", v: "𐊶", w: "𐊘", x: "𐊙", y: "𐊚",
  z: "𐊂",
};

function toZenth(text) {
  return text
    .toLowerCase()
    .split("")
    .map(c => zenthMap[c] || c)
    .join("");
}

function fromZenth(text) {
  const revMap = Object.fromEntries(Object.entries(zenthMap).map(([k,v]) => [v,k]));
  return text
    .split("")
    .map(c => revMap[c] || c)
    .join("");
}

function setOutput(msg) {
  const out = document.getElementById("output");
  out.textContent = msg;
}

// attach event listener to button
document.getElementById("translateBtn").addEventListener("click", () => {
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const input = document.getElementById("inputText").value.trim();

  if (!input) {
    setOutput("⚠️ Please enter some text to translate.");
    return;
  }

  if (from === "zenth" && to === "zenth") {
    setOutput(input);
    return;
  }

  if (to === "zenth") {
    setOutput(toZenth(input));
    return;
  }

  if (from === "zenth") {
    setOutput(fromZenth(input));
    return;
  }

  // Placeholder for non-Zenth → non-Zenth
  setOutput(`⚠️ Translation from ${languages[from]} to ${languages[to]} not supported yet. Showing original:\n"${input}"`);
});

  // Placeholder for non-Zenth → non-Zenth
  setOutput(`⚠️ Translation from ${languages[from]} to ${languages[to]} not supported yet. Showing original:\n"${input}"`);
}

