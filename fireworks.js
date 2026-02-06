// fireworks.js
const canvas = document.getElementById("fireworks");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework() {
  const x = random(100, canvas.width - 100);
  const y = random(100, canvas.height - 100);
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x,
      y,
      vx: random(-3, 3),
      vy: random(-3, 3),
      alpha: 1,
    });
  }

  const interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = `rgba(255, ${Math.floor(random(100,255))}, 0, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;
    });
    if (particles.every(p => p.alpha <= 0)) clearInterval(interval);
  }, 30);
}

// Launch multiple fireworks
setInterval(createFirework, 500);
