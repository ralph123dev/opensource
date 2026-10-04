let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay() {
    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("display").innerText = `${h}:${m}:${s}`;

}

function startTimer() {
    timer = setInterval(() => {

        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay()

    }, 1000)
}

function toggleTimer(){
    const icon = document.getElementById("toggleIcon");
    const text = document.getElementById("toggleText");

    if(timer == null){
        startTimer();
        icon.className = "fa-solid fa-pause";
        text.innerText = "Pause";
    } else{
        stopTimer()
    }
}

function stopTimer(){
    clearInterval(timer);
    timer = null;
    document.getElementById("toggleIcon").className = "fa-solid fa-play";
    document.getElementById("toggleText").innerText = "Start"
}

function resetTimer(){
    stopTimer();
    seconds = minutes = hours = 0;
    updateDisplay();
}