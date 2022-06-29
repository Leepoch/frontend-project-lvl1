// ОБЩАЯ ЛОГИКА
import readlineSync from 'readline-sync';
import { calculater } from '/home/leepoch/frontend-project-lvl1/games/brain-calc.js';
import { isEven } from '/home/leepoch/frontend-project-lvl1/games/brain-even.js';

const numberOfRounds = 3; 
export const generalLogic = (rules) => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    console.log(rules)

    for (let i = 0; i < numberOfRounds; i += 1) {
        const [rightAnswer, task] = calculater()
        console.log(`Question: ${task}`)
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === String(rightAnswer)) {
            console.log('Correct!')
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }
    console.log(`Congratulations ${name}!`)
}

