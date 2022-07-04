import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rule = 'What is the result of the expression?';
const calculatedRightAnswer = (num1, num2, randomSign) => {
  switch (randomSign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};
const calcGameRound = () => {
  const sings = ['+', '-', '*'];
  const randomSign = sings[randomNum(0, sings.length - 1)];
  const num1 = randomNum(0, 20);
  const num2 = randomNum(0, 20);
  const task = `${num1} ${randomSign} ${num2}`;
  const rightAnswer = String(calculatedRightAnswer(num1, num2, randomSign));
  return [rightAnswer, task];
};
const startGame = () => generalLogic(calcGameRound, rule);
export default startGame;
