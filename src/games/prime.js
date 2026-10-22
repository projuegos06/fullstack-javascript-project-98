import runEngine from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const description = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Función predicado para verificar si un número es primo
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  // Usamos las constantes en lugar de los números fijos
  const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runEngine(description, generateRound);
};

export default runPrimeGame;