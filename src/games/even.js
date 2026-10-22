import runEngine from '../index.js';

// Constantes para evitar números mágicos
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  // Le pasamos explícitamente las constantes
  const number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playEvenGame = () => {
  runEngine(description, generateRound);
};

export default playEvenGame;