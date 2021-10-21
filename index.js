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

let nIntervalId = null;

function onChangeColor() {
    refs.btnStart.disabled = true;
    nIntervalId = setInterval(() => {
        refs.bodyBcg.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
        }, 1000)
    }

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


function onStopChangeColor() {
    refs.btnStart.disabled = false;
    clearInterval(nIntervalId);
  }