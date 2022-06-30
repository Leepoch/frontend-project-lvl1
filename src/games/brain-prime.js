#!/usr/bin/env node
import generalLogic from '/home/leepoch/frontend-project-lvl1/src/index.js';
import randomNum from '/home/leepoch/frontend-project-lvl1/src/utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeGame = () => {
  let rightAnswer = 'yes';
  const num = randomNum(2, 20);
  if (num % 2 === 0) {
    rightAnswer = 'no';
  }
  if (num === 2) {
    rightAnswer = 'yes';
  }
  const task = num;
  const arrForReturn = [rightAnswer, task];
  return arrForReturn;
};
generalLogic(primeGame, rules);
