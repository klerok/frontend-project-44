import { getRandomNum, basisOfTheGames } from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, diff, size) => {
  const progressionArray = [];
  for (let i = 0; i < size; i += 1) {
    progressionArray.push(start + diff * i);
  }
  return progressionArray;
};

const game = () => {
  const genProgression = getProgression(getRandomNum(), getRandomNum(1, 5), getRandomNum(5, 10));
  const hiddenNum = getRandomNum(0, genProgression.length - 1);
  const progressionResult = [];
  for (let i = 0; i < genProgression.length; i += 1) {
    if (i === hiddenNum) {
      progressionResult.push('..');
    } else {
      progressionResult.push(genProgression[i]);
    }
  }
  const question = progressionResult.join(' ');
  const answer = `${genProgression[hiddenNum]}`;
  return [question, answer];
};

export default function runGame() {
  basisOfTheGames(description, game);
}
