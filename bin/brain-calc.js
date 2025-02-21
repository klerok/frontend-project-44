#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from './brain-games.js';

const getRandomNum = (min=0, max=100) => Math.floor(Math.random() * (max - min + 1)) + min;
const operators = ['+', '-', '*'];

console.log('What is the result of the expression?');

const roundsCount = 3;
const calculate = () => {
    for (let i = 1; i <= roundsCount; i++) {
        const num1 = getRandomNum();
        const num2 = getRandomNum();
        const operator = operators[getRandomNum(0, 2)];
        console.log(`Question: ${num1} ${operator} ${num2}`)
        const answer = () => { 
            switch (operator) {
                case '+':
                    return `${num1 + num2}`;
                case '-':
                    return `${num1 - num2}`;
                case '*':
                    return `${num1 * num2}`;
            }
        }
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === answer()) {
            console.log('Correct!')
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer()}'.`)
            return `Let's try again, ${userName}`
        }
    }
    return `Congratulations, ${userName}!`
}

console.log(calculate())