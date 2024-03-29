import generateRandomNum from '../generateRandomNum.js';
import { play, maxRounds } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeGameDataPrime = () => {
  const number = generateRandomNum(0, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, answer];
};

const brainPrime = () => {
  const gameData = [];
  for (let i = 0; i < maxRounds; i += 1) {
    gameData.push(makeGameDataPrime());
  }
  play(rule, gameData);
};
export default brainPrime;
