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

const question = document.querySelector(".question")
const answer1 = document.querySelector(".answer1")
const answer2 = document.querySelector(".answer2")
const answer3 = document.querySelector(".answer3")
const answer4 = document.querySelector(".answer4")

class Sombrero {
  constructor(question, answer1, answer2, answer3, answer4) {
    this._question = question;
    this._answer1 = answer1;
    this._answer2 = answer2;
    this._answer3 = answer3;
    this._answer4 = answer4;
  }

  questionAppear() {
    question.innerText = this._question;
    answer1.innerText = this._answer1;
    answer2.innerText = this._answer2;
    answer3.innerText = this._answer3;
    answer4.innerText = this._answer4;
  }
}

let question1 = new Sombrero('¿Cómo te definirías?', 'Valiente', 'Leal', 'Sabio', 'Ambicioso');
let question2 = new Sombrero('¿Cuál es tu clase favorita?', 'Vuelo', 'Pociones', 'Defensa contra las artes oscuras', 'Animales fantásticos');
let question3 = new Sombrero('¿Dónde pasarías más tiempo?', 'Invernadero', 'Biblioteca', 'En la sala común', 'Explorando');
let question4 = new Sombrero('¿Cuál es tu mascota?', 'Sapo', 'Lechuza', 'Gato', 'Serpiente');

function start() {
  question1.questionAppear()
  
}

start()