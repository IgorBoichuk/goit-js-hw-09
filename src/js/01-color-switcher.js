const bodyColor = document.querySelector('body');

bodyColor.addEventListener('click', event => {
  console.log(event.target.textContent);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
