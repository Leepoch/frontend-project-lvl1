#!/usr/bin/env node
import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const num = randomNum(1, 20);
  const task = num;
  const rightAnswer = (isPrime(num)) ? 'yes' : 'no';
  return [rightAnswer, task];
};
generalLogic(primeGame, rules);
