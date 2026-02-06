const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const celebration = document.getElementById("celebration");
const mainGif = document.getElementById("main-gif");

let scale = 1;
let noClicks = 0;

// every NO makes YES stronger
noBtn.addEventListener("click", () => {
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
