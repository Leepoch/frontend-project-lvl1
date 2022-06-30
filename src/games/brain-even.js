#!/usr/bin/env node
import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = () => {
  const arrayOfrightAnswerAndTask = ['', randomNum(0, 20)];
  if (arrayOfrightAnswerAndTask[1] % 2 === 0) {
    arrayOfrightAnswerAndTask[0] = 'yes';
  } else {
    arrayOfrightAnswerAndTask[0] = 'no';
  }
  return arrayOfrightAnswerAndTask;
};
generalLogic(isEven, rules);
