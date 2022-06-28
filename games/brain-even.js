#!/usr/bin/env node
import { randomNum } from '/home/leepoch/frontend-project-lvl1/src/utils.js';
import { generalLogic } from '/home/leepoch/frontend-project-lvl1/src/index.js';

const parityQuestion = () => {
    let rightAnswer = '';
    let questionInGame = randomNum(20)
    if (questionInGame % 2 === 0) {
        rightAnswer = 'yes'
    } else {
        rightAnswer = 'no'
    }
    generalLogic('Answer "yes" if the number is even, otherwise answer "no".', rightAnswer, questionInGame);
}
parityQuestion()

export default parityQuestion;