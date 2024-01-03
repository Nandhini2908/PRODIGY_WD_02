let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let Reftime = document.querySelector(".displaytime");
let time = null;

document.getElementById("starttime").addEventListener("click", () => {
    if (time !== null) {
        clearInterval(time);
    }
    time = setInterval(displayTimer, 10);
});

document.getElementById("stoptime").addEventListener("click", () => {
    clearInterval(time);
});

document.getElementById("resettime").addEventListener("click", () => {
    clearInterval(time);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    Reftime.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
                ? "0" + milliseconds
                : milliseconds;

    Reftime.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}