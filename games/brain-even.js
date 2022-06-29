#!/usr/bin/env node
import { randomNum } from '/home/leepoch/frontend-project-lvl1/src/utils.js';
import { generalLogic } from '/home/leepoch/frontend-project-lvl1/src/index.js';

export const isEven = () => {
    const arrayOfrightAnswerAndTask = ['', randomNum(20)]
    if (arrayOfrightAnswerAndTask[1] % 2 === 0) {
        arrayOfrightAnswerAndTask[0] = 'yes'
    } else {
        arrayOfrightAnswerAndTask[0] = 'no'
    }
    return arrayOfrightAnswerAndTask
}
generalLogic('Answer "yes" if the number is even, otherwise answer "no".')
