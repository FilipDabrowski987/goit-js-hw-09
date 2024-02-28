import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector('button[data-start]');
const datePicker = document.querySelector('#datetime-picker');
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startButton.setAttribute('disabled', true);
      window.alert('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled');
    };
  },
});

startButton.addEventListener('click', () => {
  setInterval(() => {
    datePicker.setAttribute('disabled', true);
    startButton.setAttribute('disabled', true);
    const differenceTime = new Date(datePicker.value) - new Date();

 if (differenceTime < 0) {
    clearInterval();
    datePicker.removeAttribute('disabled');
    startButton.removeAttribute('disabled');
    return;
};

    const { days, hours, minutes, seconds } = convertMs(differenceTime);
    daysSpan.textContent = addLeadingZero(days);
    hoursSpan.textContent = addLeadingZero(hours);
    minutesSpan.textContent = addLeadingZero(minutes);
    secondsSpan.textContent = addLeadingZero(seconds);   
  }, 1000);
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
};

function convertMs(ms) {
// Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
// Remaining days
  const days = Math.floor(ms / day);
// Remaining hours
  const hours = Math.floor((ms % day) / hour);
// Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}