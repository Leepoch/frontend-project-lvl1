import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGameRound = () => {
  const num = randomNum(1, 20);
  const task = num;
  const rightAnswer = (isPrime(num)) ? 'yes' : 'no';
  return [rightAnswer, task];
};
const startGame = () => generalLogic(primeGameRound, rule);
export default startGame;
