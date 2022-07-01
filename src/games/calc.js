import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rule = 'What is the result of the expression?';
const calculatedRightAnswer = (num1, num2, randomSign) => {
  let rightAnswer = 0;
  switch (randomSign) {
    case '+':
      rightAnswer = num1 + num2;
      return rightAnswer;
    case '-':
      rightAnswer = num1 - num2;
      return rightAnswer;
    case '*':
      rightAnswer = num1 * num2;
      return rightAnswer;
    default:
      return null;
  }
};
const calcGameRound = () => {
  const sings = ['+', '-', '*'];
  const randomSign = sings[randomNum(0, 2)];
  const num1 = randomNum(0, 20);
  const num2 = randomNum(0, 20);
  const task = `${num1} ${randomSign} ${num2}`;
  const rightAnswer = String(calculatedRightAnswer(num1, num2, randomSign));
  return [rightAnswer, task];
};
const startGame = () => generalLogic(calcGameRound, rule);
export default startGame;
