const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const celebration = document.getElementById("celebration");
const mainGif = document.getElementById("main-gif");

let scale = 1;
let noClicks = 0;

function moveNoButton() {
  const yesRect = yesBtn.getBoundingClientRect();
  const cardRect = document.querySelector(".card").getBoundingClientRect();

  // distance from YES edge
  const padding = 20;

  // random angle around YES
  const angle = Math.random() * 2 * Math.PI;

  const radius =
    Math.max(yesRect.width, yesRect.height) / 2 + padding;

  const x =
    yesRect.left +
    yesRect.width / 2 +
    radius * Math.cos(angle) -
    cardRect.left;

  const y =
    yesRect.top +
    yesRect.height / 2 +
    radius * Math.sin(angle) -
    cardRect.top;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}


// every NO makes YES stronger
let yesScale = 1;

noBtn.addEventListener("click", () => {
  yesScale += 0.3; // keep it spicy
  yesBtn.style.transform = `scale(${yesScale})`;
  moveNoButton();

  noClicks++;

  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;

  // progressively unhinged text
  if (noClicks === 3) yesBtn.textContent = "TRUC. 🥺";
  if (noClicks === 6) yesBtn.textContent = "PLEASE TRUC 💕";
  if (noClicks === 9) yesBtn.textContent = "OKAY TRUC WTF 😭";
  if (noClicks === 12) yesBtn.textContent = "TRUC LI. YOU HAVE TO SAY YES 💖";

  // swap GIF midway
  if (noClicks === 5) {
    mainGif.src = "assets/suspicious.gif";
  }

  if (noClicks === 10) {
    mainGif.src = "assets/side-eye.gif";
  }
});

// final YES click
yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  mainGif.style.display = "none";
  celebration.classList.remove("hidden");
});


