import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rule = 'What number is missing in the progression?';
const getProgresion = (progressionLength, first, stepProgression) => {
  const progression = [];
  let num = first;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(num);
    num += stepProgression;
  }
  return progression;
};

const progressionGameRound = () => {
  const stepProgression = randomNum(1, 6);
  const progressionLength = randomNum(5, 11);
  const first = randomNum(1, 20);
  const progression = getProgresion(progressionLength, first, stepProgression);
  const index = randomNum(0, progressionLength - 1);
  const rightAnswer = String(progression[index]);
  progression[index] = '..';
  return [rightAnswer, progression.join([' '])];
};
const startGame = () => generalLogic(progressionGameRound, rule);
export default startGame;
