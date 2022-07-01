import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rule = 'What number is missing in the progression?';
const getProgresion = (arrayLength, number, progressionMultiplier) => {
  const numbers = [];
  let num = number;
  for (let i = 0; i < arrayLength; i += 1) {
    numbers.push(num);
    num += progressionMultiplier;
  }
  return numbers;
};

const progressionGameRound = () => {
  const progressionMultiplier = randomNum(1, 6);
  const arrayLength = randomNum(5, 11);
  const number = randomNum(1, 20);
  const numbers = getProgresion(arrayLength, number, progressionMultiplier);
  const randomNumOfArray = randomNum(0, arrayLength);
  const rightAnswer = String(numbers[randomNumOfArray]);
  numbers[randomNumOfArray] = '..';
  return [rightAnswer, numbers.join([' '])];
};
const startGame = () => generalLogic(progressionGameRound, rule);
export default startGame;
