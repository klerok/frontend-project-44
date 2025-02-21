#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from "./brain-games.js";

const getRandomNum = (min=0, max=100) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Answer "yes" if the number is even, otherwise answer "no".')

const roundsCount = 3;
const isEven = () => {
    for (let i = 1; i <= roundsCount; i++) {
        const num = getRandomNum()
        console.log(`Question: ${num}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if ((num % 2 === 0 && userAnswer === 'yes') || (num % 2 !== 0 && userAnswer === 'no')) {
            console.log('Correct!')
        } else {
            const answer = num % 2 === 0 ? 'yes' : 'no'
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
            return `Let's try again, ${userName}`
        }
    }
    return `Congratulations, ${userName}!`
}
console.log(isEven())