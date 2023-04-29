// outputs

let showYears = document.querySelector(".years");
let showMonths = document.querySelector(".months");
let showDays = document.querySelector(".days");
console.log(showYears, showMonths, showDays);

let form = document.querySelector("form");
let submit = document.querySelector(".btn");
// inputs

function showAge(event) {
  event.preventDefault();
  let today = new Date();
  // month/date/year
  let inpu = `${month.value}/${days.value}/${year.value}`;
  let bday = new Date(inpu);

  let ms = today - bday;

  let secs = ms / 1000;
  let mins = secs / 60;
  let hrs = mins / 60;
  let dys = hrs / 24;
  let y = Math.floor(dys / 365);
  let m = Math.floor((dys % 365) / 30);
  let r = Math.floor((dys % 365) % 30);

  showMonths.innerHTML = m;
  showYears.innerHTML = y;
  showDays.innerHTML = r;
}

form.addEventListener("submit", showAge);
