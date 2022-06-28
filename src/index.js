// ОБЩАЯ ЛОГИКА
import readlineSync from 'readline-sync';

const numberOfRounds = 3; 
export const generalLogic = (conditions, rightAnswer, questionInGame) => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    console.log(conditions)

    for (let i = 0; i < numberOfRounds; i += 1) {
        console.log(`Question: ${questionInGame}`)
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === rightAnswer) {
            console.log('Correct!')
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }
    console.log(`Congratulations ${name}!`)
}

