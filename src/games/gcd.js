import runEngine from '../index.js';

const description = 'Encuentra el máximo común divisor de los números dados.';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

// Algoritmo de Euclides para calcular el MCD
const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

const runGcdGame = () => {
  runEngine(description, generateRound);
};

export default runGcdGame;