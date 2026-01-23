// WAIT until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Zenth translator loaded.");
});

// Zenth alphabet
const zenthMap = {
  a:"𐊜", b:"𐊗", c:"𐊍", d:"𐊅", e:"𐊴",
  f:"𐊇", g:"𐊈", h:"𐊉", i:"𐊡", j:"𐊊",
  k:"𐊋", l:"𐊠", m:"𐊓", n:"𐊧", o:"𐊵",
  p:"𐊔", q:"𐊕", r:"𐊽", s:"𐊢", t:"𐊑",
  u:"𐊫", v:"𐊶", w:"𐊘", x:"𐊙", y:"𐊚",
  z:"𐊂"
};

const reverseZenth = Object.fromEntries(
  Object.entries(zenthMap).map(([k,v]) => [v,k])
);

// MAIN TRANSLATE FUNCTION
function translateText() {
  const input = document.getElementById("inputText").value;
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
    output.textContent = "⚠️ Enter text first.";
    return;
  }

  let result = "";

  // English → Zenth
  if (from === "english" && to === "zenth") {
    result = input
      .toLowerCase()
      .split("")
      .map(c => zenthMap[c] || c)
      .join("");
  }

  // Zenth → English
  else if (from === "zenth" && to === "english") {
    result = input
      .split("")
      .map(c => reverseZenth[c] || c)
      .join("");
  }

  // Same → Same
  else {
    result = input;
  }

  // FORCE output
  output.textContent = result;
}

