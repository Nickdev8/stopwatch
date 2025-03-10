let minutes = 0, seconds = 0, miliseconds = 0, interval;
const display = document.querySelector('.stopwatch');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

function updateDisplay() {
    
    miliseconds = ('0' + miliseconds).slice(-2)
    seconds = ('0' + seconds).slice(-2)
    minutes = ('0' + minutes).slice(-2)
    display.textContent = `${minutes}:${seconds}:${miliseconds}`;
}

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            miliseconds++;
            if (miliseconds === 100) {
                seconds++;
                miliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            updateDisplay();
        }, 10);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);


const rangeValue = document.getElementById('js--rangeValue');
const slider = document.getElementById('js--slider');
//const body = document.getElementById('js--body'); deze werkt niet

slider.value = 1;
rangeValue.innerText = slider.value + "x";

slider.oninput = function() {
    rangeValue.innerText = this.value + "x";
    rangeValue.style.fontSize = this.value + "rem";
}

const text = document.getElementById('js--text');
const img = document.getElementById('js--img');

let gegevens = {
    "text": "Dit is Furkan Ceylan",
    "img": "img/1.webp",
}
text.innerText = gegevens.text;
img.src = gegevens.img;