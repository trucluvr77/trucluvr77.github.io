const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const response = document.getElementById("response");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  response.textContent = "YAYYY 💖 See you on Valentine’s Day 😘";
});
