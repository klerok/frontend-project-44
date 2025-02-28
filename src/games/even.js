import basisOfTheGames from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const question = getRandomNum();
  const answer = isEven(question);
  return [question, answer];
};

export default function runGame() {
  basisOfTheGames(description, game);
}
