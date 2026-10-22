import runEngine from '../index.js';

// Constantes para los límites numéricos
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const MIN_INDEX = 0;

const description = '¿Cuál es el resultado de la expresión?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(MIN_INDEX, operators.length - 1)];
  const num1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const num2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

const runCalcGame = () => {
  runEngine(description, generateRound);
};

export default runCalcGame;