import runEngine from '../index.js';

// Constantes para evitar números mágicos
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const description = 'Encuentra el máximo común divisor de los números dados.';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Algoritmo de Euclides para calcular el MCD
const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const generateRound = () => {
  // Pasamos explícitamente las constantes
  const num1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const num2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

const runGcdGame = () => {
  runEngine(description, generateRound);
};

export default runGcdGame;