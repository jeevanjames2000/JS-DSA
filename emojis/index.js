const emoji = document.querySelector("#emoji");
const emojis = [
  "😂",
  "😊",
  "🤣",
  "❤️",
  "😍",
  "👍",
  "😁",
  "💕",
  "😘",
  "👌",
  "😒",
];

emoji.addEventListener("mouseenter", () => {
  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});

const obj = new Object("hello");
console.log(obj);

const obj2 = { name: "hello" };
console.log(typeof obj2);
