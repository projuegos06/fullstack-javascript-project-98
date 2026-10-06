import runEngine from '../index.js';

const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playEvenGame = () => {
  runEngine(description, generateRound);
};

export default playEvenGame;