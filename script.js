const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const celebration = document.getElementById("celebration");
const mainGif = document.getElementById("main-gif");

let noClicks = 0;
let noScale = 1; // starting scale for NO button

noBtn.addEventListener("click", () => {
  noClicks++;

  // shrink NO a tiny bit each click
  noScale = Math.max(noScale - 0.05, 0.5); // never smaller than 50%
  noBtn.style.transform = `scale(${noScale})`;

  // YES text changes (optional, keep as before)
  if (noClicks === 3) yesBtn.textContent = "TRUC. 🥺";
  if (noClicks === 6) yesBtn.textContent = "PLEASE TRUC 💕";
  if (noClicks === 9) yesBtn.textContent = "OKAY TRUC WTF 😭";
  if (noClicks === 12) yesBtn.textContent = "TRUC LI. YOU HAVE TO SAY YES 💖";

  // GIF swaps
  if (noClicks === 5) mainGif.src = "assets/suspicious.gif";
  if (noClicks === 10) mainGif.src = "assets/side-eye.gif";

  // disappear after 15 clicks (optional)
  if (noClicks >= 15) noBtn.style.display = "none";
});

yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  mainGif.style.display = "none";
  celebration.classList.remove("hidden");
});
