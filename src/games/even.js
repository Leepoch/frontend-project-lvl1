import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const evenGameRound = () => {
  const num = randomNum(1, 20);
  const task = num;
  const rightAnswer = (isEven(num)) ? 'yes' : 'no';
  return [rightAnswer, task];
};
const startGame = () => generalLogic(evenGameRound, rule);
export default startGame;
