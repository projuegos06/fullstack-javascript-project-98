import runEngine from '../index.js';

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
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

const runCalcGame = () => {
  runEngine(description, generateRound);
};

export default runCalcGame;