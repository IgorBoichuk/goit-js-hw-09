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
