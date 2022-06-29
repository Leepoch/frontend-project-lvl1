#!/usr/bin/env node

import { generalLogic } from '/home/leepoch/frontend-project-lvl1/src/index.js';
import { randomNum } from '/home/leepoch/frontend-project-lvl1/src/utils.js'

export const calculater = () => {
    const randomSign = randomNum(2)
    const num1 = randomNum(20)
    const num2 = randomNum(20)
    let task = ''
    let rightAnswer = 0
    switch (randomSign) {
        case 0:
            rightAnswer = num1 + num2
            task = `${num1} + ${num2}`
            break
        case 1:
            rightAnswer = num1 - num2
            task = `${num1} - ${num2}`
            break
        case 2:
            rightAnswer = num1 * num2
            task = `${num1} * ${num2}`
            break
    }
    const arrForReturn = [rightAnswer, task]
    return arrForReturn
};
generalLogic('What is the result of the expression?')