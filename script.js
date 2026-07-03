const targetDate = new Date("January 3, 2025 00:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = now - targetDate;

const days = Math.floor(distance/(1000*60*60*24));

document.getElementById("timer").innerHTML =
days + " Days Together ❤️";

},1000);