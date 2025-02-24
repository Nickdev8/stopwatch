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