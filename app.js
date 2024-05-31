let hour = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

function displayTime() {
  let date = new Date();

  // getting hour minute seconds in date variable //

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  // Variable for rotation //

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  // Rotation of clock hand //

  hour.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
