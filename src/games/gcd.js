import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  let gcd = 0;
  let rightAnswer = 1;
  if (num1 > num2) {
    gcd = num1;
  } else {
    gcd = num2;
  }
  for (let i = gcd; i > 1; i -= 1) {
    if (num1 % gcd === 0 && num2 % gcd === 0) {
      rightAnswer = gcd;
    } else {
      gcd -= 1;
    }
  }
  return rightAnswer;
};

const gcdGameRound = () => {
  const num1 = randomNum(1, 101);
  const num2 = randomNum(1, 101);
  const task = `${num1} ${num2}`;
  const rightAnswer = String(getGcd(num1, num2));
  return [rightAnswer, task];
};
const startGame = () => generalLogic(gcdGameRound, rule);
export default startGame;
