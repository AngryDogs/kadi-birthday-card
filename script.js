function bursty(x, y) {
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { white: '#34E1FF' },
      duration: 2000,
    },
  }).tune({
    x: x,
    y: y,
  });

  burst.replay();
}

document.addEventListener('click', (event) => {
  bursty(event.pageX, event.pageY);
});

let confetti1 = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 0: 200 },
  count: 20,
  degree: 360,
  children: {
    fill: { white: '#34E1FF' },
    duration: 2000,
  },
});

let confetti2 = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 0: 150 },
  count: 20,
  degree: 360,
  children: {
    fill: { white: '#34E1FF' },
    duration: 1500,
  },
});

let confetti3 = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 0: 100 },
  count: 30,
  degree: 360,
  children: {
    fill: { white: '#34E1FF' },
    duration: 1700,
  },
});

setInterval(() => randomizedConfetti(confetti1), 1000);
setInterval(() => randomizedConfetti(confetti2), 900);
setInterval(() => randomizedConfetti(confetti3), 1500);

function randomizedConfetti(confetti) {
  let randomX = Math.floor(
    Math.random() * (document.body.clientWidth - 100) + 0
  );
  let randomY = Math.floor(Math.random() * (window.innerHeight - 100) + 0);
  confetti.tune({
    x: randomX,
    y: randomY,
  });

  confetti.replay();
}

Splitting();
