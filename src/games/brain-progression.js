#!/usr/bin/env node
import randomNum from '../utils.js';
import generalLogic from '../index.js';

const rules = 'What number is missing in the progression?';
const gameProgression = () => {
  const lengthOfArray = randomNum(5, 11);
  let numOfProgression = randomNum(1, 20);
  const progressionMultiplier = randomNum(1, 6);
  const arrOfNumbers = [];
  for (let i = 0; i < lengthOfArray; i += 1) {
    arrOfNumbers.push(numOfProgression);
    numOfProgression += progressionMultiplier;
  }
  const randomNumOfArray = randomNum(0, lengthOfArray);
  const rightAnswer = arrOfNumbers[randomNumOfArray];
  arrOfNumbers[randomNumOfArray] = '...';
  const arrForReturn = [rightAnswer, arrOfNumbers.join([' '])];
  return arrForReturn;
};
generalLogic(gameProgression, rules);
