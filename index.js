var makel = document.getElementById("makel");
var mecha = document.getElementById("mecha");
var isg = document.getElementById("isg");
var fluid = document.getElementById("fluid");
var heat = document.getElementById("heat");
var ref = document.getElementById("ref");
var manuf = document.getElementById("manuf");


var makel_time = new Date("November 23 2020 13:15");
var mecha_time = new Date("November 24 2020 15:15");
var isg_time = new Date("November 25 2020 10:15");
var fluid_time = new Date("November 25 2020 17:15");
var heat_time = new Date("November 26 2020 10:15");
var ref_time = new Date("November 26 2020 13:15");
var manuf_time = new Date("November 28 2020 13:15");

var current = new Date();


var timer = setInterval( () => {
    current = new Date();
    makel.innerHTML = "Machine Elements: " + msToTime(makel_time - current);
    mecha.innerHTML = "Mechatronics: " + msToTime(mecha_time - current);
    isg.innerHTML = "İs saglıgı: " + msToTime(isg_time - current);
    fluid.innerHTML = "Fluid Mechanics: " + msToTime(fluid_time - current);
    heat.innerHTML = "Heat Transfer: " + msToTime(heat_time - current);
    ref.innerHTML = "Refrigiration: " + msToTime(ref_time - current);
    manuf.innerHTML = "MELİH BAYRAMOĞLU: " + msToTime(manuf_time - current);

}, 1000)



function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)))


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return seconds > 0 ? `${hours} : ${minutes} : ${seconds}` : "Passed"
}