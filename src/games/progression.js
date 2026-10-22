import runEngine from '../index.js';

// Constantes para evitar números mágicos
const PROGRESSION_LENGTH = 10;
const MIN_START = 1;
const MAX_START = 20;
const MIN_STEP = 1;
const MAX_STEP = 10;
const MIN_INDEX = 0;

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
  // Pasamos las constantes explícitamente
  const start = getRandomInt(MIN_START, MAX_START);
  const step = getRandomInt(MIN_STEP, MAX_STEP);
  const length = PROGRESSION_LENGTH;

  const progression = generateProgression(start, step, length);

  // Seleccionamos un índice aleatorio para ocultar usando constantes
  const hiddenIndex = getRandomInt(MIN_INDEX, length - 1);
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