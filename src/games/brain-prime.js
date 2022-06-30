#!/usr/bin/env node
import randomNum from '../utils.js';
import generalLogic from '../index.js';

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
