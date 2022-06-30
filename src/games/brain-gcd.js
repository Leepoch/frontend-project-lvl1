#!/usr/bin/env node
import generalLogic from '/home/leepoch/frontend-project-lvl1/src/index.js';
import randomNum from '/home/leepoch/frontend-project-lvl1/src/utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcdGame = () => {
  const num1 = randomNum(1, 101);
  const num2 = randomNum(1, 101);
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
  const task = `${num1} ${num2}`;
  const arrForReturn = [rightAnswer, task];
  return arrForReturn;
};
generalLogic(gcdGame, rules);
