const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const celebration = document.getElementById("celebration");
const mainGif = document.getElementById("main-gif");

let noClicks = 0;

noBtn.addEventListener("click", () => {
  noClicks++;

  // Change YES button text as user clicks NO
  if (noClicks === 3) yesBtn.textContent = "TRUC. 🥺";
  if (noClicks === 6) yesBtn.textContent = "PLEASE TRUC 💕";
  if (noClicks === 9) yesBtn.textContent = "OKAY TRUC WTF 😭";
  if (noClicks === 12) yesBtn.textContent = "TRUC LI. YOU HAVE TO SAY YES 💖";

  // Optional: swap gifs
  if (noClicks === 5) mainGif.src = "assets/suspicious.gif";
  if (noClicks === 10) mainGif.src = "assets/side-eye.gif";

  // Disappear after 15 clicks
  if (noClicks >= 15) {
    noBtn.style.display = "none";
  }
});

// YES button click
yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  mainGif.style.display = "none";
  celebration.classList.remove("hidden");
});
