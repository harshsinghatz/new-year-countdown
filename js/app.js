const daysEl = document.querySelector(".time-value-days");
const hoursEl = document.querySelector(".time-value-hours");
const minutesEl = document.querySelector(".time-value-minutes");
const secondsEl = document.querySelector(".time-value-seconds");

const timeFormat = function (time) {
  return time < 10 ? `0${time}` : time;
};
const displayTime = function (days, hours, minutes, seconds) {
  daysEl.textContent = timeFormat(days);
  hoursEl.textContent = timeFormat(hours);
  minutesEl.textContent = timeFormat(minutes);
  secondsEl.textContent = timeFormat(seconds);
};
const getTime = function (date) {
  const today = new Date();
  const endDate = new Date("1 Jan 2022");
  const days = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((endDate - today) / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor((endDate - today) / (1000 * 60)) % 60;
  const seconds = Math.floor((endDate - today) / 1000) % 60;
  displayTime(days, hours, minutes, seconds);
};

getTime();
setInterval(getTime, 1000);
