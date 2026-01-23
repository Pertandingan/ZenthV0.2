// Simple Zenth ↔ English dictionary
const zenthDict = {
    "a": "𐊜", "b": "𐊗", "c": "𐊍", "d": "𐊅", "e": "𐊴",
    "f": "𐊇", "g": "𐊈", "h": "𐊉", "i": "𐊡", "j": "𐊊",
    "k": "𐊋", "l": "𐊠", "m": "𐊓", "n": "𐊧", "o": "𐊵",
    "p": "𐊔", "q": "𐊕", "r": "𐊽", "s": "𐊢", "t": "𐊑",
    "u": "𐊫", "v": "𐊶", "w": "𐊘", "x": "𐊙", "y": "𐊚", "z": "𐊂",
    " ": " "
};

function translateToZenth(text) {
    return text.toLowerCase().split('').map(c => zenthDict[c] || c).join('');
}

function translateToEnglish(text) {
    const engDict = {};
    for (let k in zenthDict) engDict[zenthDict[k]] = k;
    return text.split('').map(c => engDict[c] || c).join('');
}

document.getElementById("translateBtn").addEventListener("click", () => {
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;
    const inputText = document.getElementById("inputText").value;
    let outputText = "";

    if (source === "english" && target === "zenth") {
        outputText = translateToZenth(inputText);
    } else if (source === "zenth" && target === "english") {
        outputText = translateToEnglish(inputText);
    } else {
        outputText = inputText;
    }

    document.getElementById("outputText").value = outputText;

    // Random chance for jumpscare
    if (Math.random() < 0.15 && inputText.trim() !== "") {
        showJumpscare();
    }
});

// Jumpscare function
function showJumpscare() {
    const jumpscare = document.getElementById("jumpscare");
    const audio = document.getElementById("jumpscareAudio");
    jumpscare.style.display = "block";
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
        jumpscare.style.display = "none";
    }, 1000); // 1 second jumpscare
}

// ARG-style lore panel messages
const loreMessages = [
    "The glyphs watch you...",
    "You shouldn't be here alone.",
    "Do you hear the whispers?",
    "They know what you typed.",
    "The Zenth language sees you."
];

let loreIndex = 0;
setInterval(() => {
    document.getElementById("loreText").innerText = loreMessages[loreIndex];
    loreIndex = (loreIndex + 1) % loreMessages.length;
}, 4000); // Changes every 4 seconds
