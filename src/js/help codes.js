// button for stop

function btnStop() {
  const stopBtn = '<button type="button" data-stop>Stop</button>';
  button.insertAdjacentHTML('afterend', stopBtn);

  // stopBtn.addEventListener('click', () => {
  //   clearInterval(intervalId);
  // });
}

const convertedDate = convertMs(deltaTime);
console.log(convertedDate);

// ----------------------------------------------------------------

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const text = document.querySelector('#datetime-picker');
const timerHtml = document.querySelector('.timer');
const btnStart = document.querySelector('button[data-start]');
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');
btnStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      Notiflix.Notify.success('Good! Click "Start"');
      btnStart.disabled = false;
    }
  },
};
flatpickr(text, options);
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
btnStart.addEventListener('click', () => {
  let timer = setInterval(() => {
    let countdown = new Date(text.value) - new Date();
    btnStart.disabled = true;
    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      days.textContent = addLeadingZero(timeObject.days);
      hours.textContent = addLeadingZero(timeObject.hours);
      minutes.textContent = addLeadingZero(timeObject.minutes);
      seconds.textContent = addLeadingZero(timeObject.seconds);
      if (countdown <= 10000) {
        timerHtml.style.color = 'tomato';
      }
    } else {
      Notiflix.Notify.success('Countdown finished');
      timerHtml.style.color = 'black';
      clearInterval(timer);
    }
  }, 1000);
});

// ------------------------------------------------------------------------ my

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//https://www.youtube.com/watch?v=jMNproAL94I&t=3828s         time 1:42:00   початок роботи з таймером
//https://youtu.be/jMNproAL94I?t=7425                         time 2:03:00   підключення інтерфейсу

// 1 січня 1970 00:00
// знайти кінцеву дату/час і поточну дату/час
// вирахувати різницю між кінцевою і поточною датою/часом

const inputDate = document.querySelector('input[type="text"]');
const button = document.querySelector('button[data-start]');

// const dateNow = new Date();
// console.log(dateNow);
inputDate.addEventListener('input', flatpickr);

const timer = {
  start() {
    const startDate = Date.now();
    console.log(startDate); // час станом на зараз, тут має зупинитись таймер

    setInterval(() => {
      const currentTime = Date.now();
      //   const deltaTime = currentTime - startDate;

      const deltaTime = startDate - currentTime; // думаю тут буде зворотній віддлік від дати яку задаємо

      //   const { days, hours, minutes, seconds } = convertMs(deltaTime);
      //   console.log(`${days}:${hours}:${minutes}:${seconds}`);

      const convertedDate = convertMs(deltaTime);
      console.log(convertedDate);

      //   console.log(pad(days));
      //   console.log(pad(hours));
      //   console.log(pad(minutes));
      //   console.log(pad(seconds));
    }, 1000);
  },
};

button.addEventListener('click', () => {
  timer.start();
  button.disabled = true;
});

// let intervalId = null;

flatpickr(inputDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

const dfgdfg = flatpickr;
console.dir(dfgdfg);

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(3000)); // {days: 0, hours: 0, minutes: 0, seconds: 3}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
