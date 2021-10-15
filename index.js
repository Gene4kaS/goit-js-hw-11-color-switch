const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    btnStart: document.querySelector('[data-action = "start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    bodyBcg: document.body,
}

refs.btnStart.addEventListener('click', onChangeColor);
refs.btnStop.addEventListener('click', onStopChangeColor);

let nIntervalId;

function onChangeColor() {
    if (!nIntervalId) {
        nIntervalId = setInterval(randomColor, 1000);
    }
}


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let currentColor,
  newColor = "#FFFFFF";

function randomColor() {
    do {
        newColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    } while (newColor === currentColor);

    refs.bodyBcg.style.backgroundColor = newColor;
    currentColor = newColor;
};

function onStopChangeColor() {
    clearInterval(nIntervalId);
    nIntervalId = null; 
  }