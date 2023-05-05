// countdown 
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const myBirthday = '20 Aug 2023';

function countdown() {
    const date = new Date(myBirthday);
    const now = new Date();
    const timeLeft = date - now;
    console.log(timeLeft); // in milliseconds.
    const seconds = (timeLeft/1000);
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const second = Math.floor(seconds) % 60;
    console.log(days, hours, minutes, second);
    day.innerHTML = formatTime(days);
    hour.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(minutes);
    sec.innerHTML = formatTime(second);
}

function formatTime(time){
    return time < 10 ?  '0' + time : time
}
countdown();

setInterval(countdown, 1000);