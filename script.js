const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const celebration = document.getElementById("celebration");
const mainGif = document.getElementById("main-gif");
const playArea = document.getElementById("play-area");

let yesScale = 1;
let noClicks = 0;

function isOverlapping(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function moveNoButtonSafely() {
  const areaRect = playArea.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();

  let tries = 0;
  let safe = false;

  while (!safe && tries < 50) {
    const x =
      Math.random() * (areaRect.width - noBtn.offsetWidth);
    const y =
      Math.random() * (areaRect.height - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    const noRect = noBtn.getBoundingClientRect();
    safe = !isOverlapping(noRect, yesRect);
    tries++;
  }
}

noBtn.addEventListener("click", () => {
  noClicks++;

  // YES grows forever 💪
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;

  moveNoButtonSafely();

  // escalating unhinged text
  if (noClicks === 3) yesBtn.textContent = "TRUC. 🥺";
  if (noClicks === 6) yesBtn.textContent = "PLEASE TRUC 💕";
  if (noClicks === 9) yesBtn.textContent = "OKAY TRUC WTF 😭";
  if (noClicks === 12) yesBtn.textContent = "TRUC LI. YOU HAVE TO SAY YES 💖";

  // gif swaps
  if (noClicks === 5) mainGif.src = "assets/suspicious.gif";
  if (noClicks === 10) mainGif.src = "assets/side-eye.gif";
});

yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  mainGif.style.display = "none";
  celebration.classList.remove("hidden");
});
