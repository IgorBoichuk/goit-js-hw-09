import { throttle } from 'lodash';

const bodyColor = document.querySelector('body');

bodyColor.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  console.log(bodyColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
