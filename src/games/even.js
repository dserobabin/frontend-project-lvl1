import generateRandomNum from '../generateRandomNum.js';
import { play, maxRounds } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeGameDataEven = () => {
  const number = generateRandomNum(0, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, answer];
};

const brainEven = () => {
  const gameData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    gameData.push(makeGameDataEven());
  }
  play(rule, gameData);
};
export default brainEven;
