var signal = document.getElementById("signal");
var ecd = document.getElementById("ecd");


var signal_time = new Date("December 29 2020 08:30");
var ecd_time = new Date("January 06 2021 12:30");

var current = new Date();


var timer = setInterval( () => {
    current = new Date();
    signal.innerHTML = "Signal: " + msToTime(signal_time - current);
    ecd.innerHTML = "ECD: " + msToTime(ecd_time - current);
}, 1000)



function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)))


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return seconds > -1 ? `${hours} : ${minutes} : ${seconds}` : "Passed"
}