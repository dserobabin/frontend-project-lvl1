import generateRandomNum from '../generateRandomNum.js';
import { play, maxRounds } from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = (stepOfProgression, startOfProgression, lengthOfProgression) => {
  const numbers = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === 0) {
      numbers.push(startOfProgression);
    } else {
      numbers.push(numbers[i - 1] + stepOfProgression);
    }
  }
  return numbers;
};

const hideElement = (array, hiddenElement) => {
  const resultArray = array;
  resultArray[hiddenElement] = '..';
  return resultArray;
};

const makeGameDataprogression = () => {
  const stepOfProgression = generateRandomNum(1, 20);
  const startOfProgression = generateRandomNum(0, 50);
  const lengthOfProgression = generateRandomNum(5, 10);
  const progression = getProgression(stepOfProgression, startOfProgression, lengthOfProgression);
  const hiddenNumber = Math.floor(Math.random() * progression.length);
  const answer = `${progression[hiddenNumber]}`;
  const question = `${hideElement(progression, hiddenNumber).join(' ')}`;
  return [question, answer];
};

const brainProgression = () => {
  const gameData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    gameData.push(makeGameDataprogression());
  }
  play(rule, gameData);
};
export default brainProgression;
