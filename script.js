import { participants } from './dataParticipants.js';
// import { checkboxStatement } from './settingsScript.js';

const startButton = document.querySelector('.js-start__btn');
const resetButton = document.querySelector('.js-reset__btn');
const winnerNameEl = document.querySelector('.js-winner-name');
const winnerContainerEl = document.querySelector('.winner__container');
const resultEl = document.querySelector('.result__container');
const resultImage = document.querySelector('.container__img');

let savedDemoIsOn = JSON.parse(localStorage.getItem('setting'));

let winner;

console.log(savedDemoIsOn);

// ======== Index Javascrpt ========
function pickWinner() {
  let personTotalNumber = participants.length;
  const randomPerson = Math.floor(Math.random() * personTotalNumber);
  let intervalId1;

  resultEl.innerHTML =
    `
    <div class="winner__incription">Подарок:</div>
    <div class="container__element">
      <img class="container__img" id="img-id-0" src="images/mystery__box.png">
    </div>
  `
    ;

  winnerContainerEl.style.backgroundColor = 'white';

  intervalId1 = setInterval(() => {
    const randomPerson2 = Math.floor(Math.random() * personTotalNumber);;

    let randomName = participants[randomPerson2].personName;

    winnerNameEl.innerHTML = `${randomName}`;
    console.log(randomName);
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId1);

    winner = participants[randomPerson].personName;

    winnerContainerEl.style.backgroundColor = 'rgb(170, 255, 0)';
    winnerNameEl.innerHTML = `${winner}`;
  }, 1500)
};

function pickPrize() {
  let randomPrizeNum = Math.floor(Math.random() * 6);

  resultImage.style.opacity = '0';

  setTimeout(() => {
    resultEl.innerHTML = savedDemoIsOn ?
      `
      <div class="winner__incription">Подарок:</div>
      <div class="container__element">
        <img class="container__img" id="img-id-0" src="images/randomPrize${randomPrizeNum}.png">
      </div>
    ` : `
      <div class="winner__incription">Подарок:</div>
        <div class="container__element">
        <img class="container__img" id="img-id-0" src="images/randomPrize6.png">
      </div>
  ` ;
  }, 2100);


}

function resetPrize() {
  winnerNameEl.innerHTML = '';

  resultEl.innerHTML =
    `
    <div class="winner__incription">Подарок:</div>
    <div class="container__element">
      <img class="container__img" id="img-id-0" src="images/mystery__box.png">
    </div>
  `;
  winnerContainerEl.style.backgroundColor = 'white';
  console.log(resultImage.classList.contains('container__img'));
}

startButton.addEventListener('click', () => {
  pickWinner();
  pickPrize();
});

resetButton.addEventListener('click', () => {
  resetPrize();
});







