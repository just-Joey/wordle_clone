import {WORDS} from ".words.js";
/* variable name written in all caps because we know the number 
of guesses before the execution and it's a global constant*/
const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0; //index of an array
let rightGuessString = WORDS[Math.floor(Math.random()* WORDS.length)];