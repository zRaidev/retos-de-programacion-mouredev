const startBtn = document.querySelector(".start-btn");
const startDiv = document.querySelector(".start");
const gameDiv = document.querySelector(".game");


startBtn.addEventListener("click", ()=>{
  startDiv.classList.add("inactive");
  gameDiv.classList.remove("inactive");
})

const modalContainer = document.querySelector(".modal-container");
const modalBg = document.querySelector(".modal-bg");
const modalTxt = document.querySelector(".results-modal__p");

function appearModal(house) {
  modalTxt.innerText = `Ahora eres parte de la casa ${house}`;

  modalContainer.classList.remove('inactive');
  modalBg.classList.remove('inactive');

  modalContainer.style.animation = 'appearFlex 3s forwards';
  modalBg.style.animation = 'appear 3s forwards';
}