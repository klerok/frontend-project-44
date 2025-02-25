import { getRandomNum, basisOfTheGames } from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } if (operator === '-') {
    return num1 - num2;
  } if (operator === '*') {
    return num1 * num2;
  }
  return 'Unexpected operator';
};

const game = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operator = operators[getRandomNum(0, 2)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = `${calculate(num1, num2, operator)}`;
  return [question, answer];
};

export default function runGame() {
  basisOfTheGames(description, game);
}
