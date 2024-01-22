/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

class Timer {
  constructor(onTick) {
    this.intervalId = null;
    this.isActive = false;
    this.tick = onTick;
    this.lastTime = 0;
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.initTime = Date.now();

    this.intervalId = setInterval(() => {
      const diff = Date.now() - this.initTime + this.lastTime;
      const time = this.#msToTime(diff);
      this.tick(time);
    }, 1000);
  }

  stop() {
    if (!this.isActive) return;
    this.isActive = false;
    clearInterval(this.intervalId);
    this.lastTime += Date.now() - this.initTime;
    console.log(this.lastTime);
  }

  #msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return { hrs, mins, secs, ms };
  }
}

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

startBtn.addEventListener('click', () => {
  timer.start();
});

stopBtn.addEventListener('click', () => {
  // clockface.textContent = '00:00:00';
  timer.stop();
});

const timer = new Timer(onTick);

function onTick({ hrs, mins, secs }) {
  const strTime = `${format(hrs)}:${format(mins)}:${format(secs)}`;
  clockface.textContent = strTime;
}

function format(num) {
  return num.toString().padStart(2, '0');
}
