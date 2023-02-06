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

// button.disabled = false;

const timer = {
  start() {
    const startDate = Date.now();
    // const startDate = options.defaultDate;

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
});

// let intervalId = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

flatpickr(inputDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

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
