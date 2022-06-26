#!/usr/bin/env node
import readlineSync from 'readline-sync';

const parityQuestion = () => {
    const max = 20;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const randomNum = Math.floor(Math.random() * max);
        console.log(`Question: ${randomNum}`);
        const answer = readlineSync.question('Your answer: ');
        if (randomNum % 2 === 0 && answer === 'yes') {
            console.log('Correct');
        } else if (randomNum % 2 !== 0 && answer === 'no') {
            console.log('Correct');
        } else {
            return `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!`
        }
    }
    return `Congratulations, Bill!`
}
export default parityQuestion;