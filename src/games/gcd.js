import { getRandomNum, basisOfTheGames } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num1 === 0 ? num2 : getGcd(num2 % num1, num1));

const game = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const answer = `${getGcd(num1, num2)}`;
  return [question, answer];
};

export default function runGame() {
  basisOfTheGames(description, game);
}
