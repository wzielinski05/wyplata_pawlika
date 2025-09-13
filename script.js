const months = document.querySelector('#months')
const weeks = document.querySelector('#weeks')
const days = document.querySelector('#days')
const seconds = document.querySelector('#seconds')
const lastPayment = new Date('2025-09-13T17:29')
let today = new Date()
const DateDiff = {

  inDays: function (d1, d2) {
    var t2 = d2.getTime();
    var t1 = d1.getTime();

    return Math.floor((t2 - t1) / (24 * 3600 * 1000));
  },

  inWeeks: function (d1, d2) {
    var t2 = d2.getTime();
    var t1 = d1.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
  },

  inMonths: function (d1, d2) {
    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();

    return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
  },

  inYears: function (d1, d2) {
    return d2.getFullYear() - d1.getFullYear();
  }
}
function secondsSince(targetDate) {
  const targetTime = targetDate.getTime();
  const currentTime = Date.now();
  return Math.floor((currentTime - targetTime) / 1000);
}
function update() {
  seconds.textContent = secondsSince(lastPayment)
}
months.textContent = DateDiff.inMonths(lastPayment, today)
weeks.textContent = DateDiff.inWeeks(lastPayment, today)
days.textContent = DateDiff.inDays(lastPayment, today)

function updateSeconds() {
  document.getElementById("secondsCounter").textContent = "Sekundy od 10.10.2024: " + secondsSince(targetDate);
}

setInterval(update, 1000);

document.addEventListener("DOMContentLoaded", () => {
  update();
});

window.addEventListener('load', () => {
  registerSW();
});

// Register the Service Worker
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator
            .serviceWorker
            .register('serviceworker.js');
    }
    catch (e) {
      console.log('SW registration failed');
    }
  }
}

