/*
  gryffindor: valor
  hufflepuff: lealtad
  ravenclaw: sabiduria
  slytherin: ambicion

  ¿Cómo te definirías? 
    1. Valiente / gryffindor
    2. Leal / hufflepuff
    3. Sabio / ravenclaw
    4. Ambicioso / slytherin
  
  ¿Cuál es tu clase favorita?
    1. Vuelo / gryffindor
    2. Pociones / ravenclaw
    3. Defensa contra las artes oscuras / slytherin
    4. Animales fantásticos / hufflepuff

  ¿Dónde pasarías más tiempo?
    1. Invernadero / hufflepuff
    2. Biblioteca / ravenclaw
    3. En la sala común / slytherin
    4. Explorando / gryffindor

  ¿Cuál es tu mascota?
    1. Sapo / ravenclaw
    2. Lechuza / gryffindor
    3. Gato / hufflepuff
    4. Serpiente / slytherin
*/ 


// start the count
let gryffindor = 0;
let hufflepuff = 0;
let ravenclaw = 0;
let slytherin = 0;

// creating an array with objects to hold the info
const Questions = [
  quest_1 = {
    question: '¿Cómo te definirías?',
    answer: ['1. Valiente', '2. Leal', '3. Sabio', '4. Ambicioso'],
    house: [gryffindor, hufflepuff, ravenclaw, slytherin]
  },

  quest_2 = {
    question: '¿Cuál es tu clase favorita?',
    answer: ['1. Vuelo', '2. Pociones', '3. Defensa contra las artes oscuras', '4. Animales fantásticos'],
    house: [gryffindor, ravenclaw, slytherin, hufflepuff]
  },

  quest_3 = {
    question: '¿Dónde pasarías más tiempo?',
    answer: ['1. Invernadero', '2. Biblioteca', '3. En la sala común', '4. Explorando'],
    house: [hufflepuff, ravenclaw, slytherin, gryffindor]
  },

  quest_4 = {
    question: '¿Cuál es tu mascota?',
    answer: ['1. Sapo', '2. Lechuza', '3. Gato', '4. Serpiente',],
    house: [ravenclaw, gryffindor, hufflepuff, slytherin]
  }
]

const questionH1 = document.querySelector(".question");
const optionsBtn = document.querySelectorAll(".options");

let questionIndex = 0;

function printQuestion(quest) {
  //for each
  questionH1.innerText = quest.question;
  optionsBtn.forEach((element, index) => {
    element.innerText = quest.answer[index];
  
    element.onclick = ()=>{
      updateHousePoints(index);
      questionIndex++;
      if (questionIndex < Questions.length) {
        printQuestion(Questions[questionIndex])
      } else {
        displayResults();
      }
    }
  });
}

function updateHousePoints(index) {
  switch(Questions[questionIndex].house[index]) {
    case gryffindor:
      gryffindor++;
      break;
    case hufflepuff:
      hufflepuff++;
      break;
    case ravenclaw:
      ravenclaw++
      break;
    case slytherin:
      slytherin++;
      break;
  }
}

function displayResults() {
  maxPoints = Math.max(gryffindor, hufflepuff, ravenclaw, slytherin);
  let house;

  if (maxPoints === gryffindor) house = "Gryffindor";
  else if (maxPoints === hufflepuff) house = "Hufflepuff";
  else if (maxPoints === ravenclaw) house = "Ravenclaw";
  else if (maxPoints === slytherin) house = "Slytherin";

  appearModal(house)
}

printQuestion(Questions[0]);

// I HAVE A PROBLEM