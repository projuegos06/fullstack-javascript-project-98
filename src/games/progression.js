import runEngine from '../index.js';

const description = '¿Qué número falta en la progresión?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Genera la progresión de números usando: inicio + indice * paso
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const length = 10; // se recomienda una longitud de 10 elementos

  const progression = generateProgression(start, step, length);

  // Seleccionamos un índice aleatorio para ocultar
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  // Reemplazamos el valor por '..' para mostrar al jugador
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runEngine(description, generateRound);
};

export default runProgressionGame;