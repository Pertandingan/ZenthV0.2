// English ↔ Zenth alphabet
const zenthMap = {
  a:"𐊜", b:"𐊗", c:"𐊍", d:"𐊅", e:"𐊴", f:"𐊇", g:"𐊈",
  h:"𐊉", i:"𐊡", j:"𐊊", k:"𐊋", l:"𐊠", m:"𐊓", n:"𐊧",
  o:"𐊵", p:"𐊔", q:"𐊕", r:"𐊽", s:"𐊢", t:"𐊑", u:"𐊫",
  v:"𐊶", w:"𐊘", x:"𐊙", y:"𐊚", z:"𐊂",
  A:"𐊜", B:"𐊗", C:"𐊍", D:"𐊅", E:"𐊴", F:"𐊇", G:"𐊈",
  H:"𐊉", I:"𐊡", J:"𐊊", K:"𐊋", L:"𐊠", M:"𐊓", N:"𐊧",
  O:"𐊵", P:"𐊔", Q:"𐊕", R:"𐊽", S:"𐊢", T:"𐊑", U:"𐊫",
  V:"𐊶", W:"𐊘", X:"𐊙", Y:"𐊚", Z:"𐊂"
};

const englishMap = Object.fromEntries(Object.entries(zenthMap).map(([k,v])=>[v,k]));

const input = document.getElementById("inputText");
const output = document.getElementById("outputText");
const btn = document.getElementById("translateBtn");
const select = document.getElementById("languageSelect");
const lore = document.getElementById("lorePanel");
const jumpscare = document.getElementById("jumpscare");

jumpscare.style.display = "none";

function translate(text, mode){
  let result = "";
  if(mode === "eng-to-zenth"){
    for(let char of text){
      result += zenthMap[char] || char;
    }
  } else {
    for(let char of text){
      result += englishMap[char] || char;
    }
  }
  return result;
}

function randomLore(){
  const messages = [
    "It sees you...",
    "The glyphs remember...",
    "Your eyes are heavy...",
    "Do not look away...",
    "It is coming for you..."
  ];
  return messages[Math.floor(Math.random()*messages.length)];
}

function maybeJumpscare(){
  if(Math.random() < 0.1){ // 10% chance
    jumpscare.style.display = "block";
    jumpscare.style.opacity = "0";
    jumpscare.style.transition = "opacity 0.2s ease-in";
    setTimeout(() => {
      jumpscare.style.opacity = "1"; // fade in
    }, 50);
    setTimeout(()=>{
      jumpscare.style.opacity = "0"; // fade out
      setTimeout(()=> jumpscare.style.display="none", 200); // hide after fade out
    }, 1000); // visible for ~1 second
  }
}

btn.addEventListener("click", ()=>{
  const mode = select.value;
  const text = input.value;
  output.value = translate(text, mode);
  lore.textContent = randomLore();
  maybeJumpscare();
});
