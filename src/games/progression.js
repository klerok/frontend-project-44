import { getRandomNum, basisOfTheGames } from "../index.js";

const description = 'What number is missing in the progression?';

const getProgression = (start, diff) => {
    const progressionLength = 10;
    const progressionArray = [];
    for (let i = 0; i < progressionLength; i += 1) {
        progressionArray.push(start + diff * i);
    };
    return progressionArray;
};

const game = () => {
    const genProgression = getProgression(getRandomNum(), getRandomNum(1, 5));
    const hiddenNum = getRandomNum(0, genProgression.length - 1);
    const progressionResult = [];
    for (let i = 0; i < genProgression.length; i++) {
        if (i === hiddenNum) {
            progressionResult.push('..');
        } else {
            progressionResult.push(genProgression[i])
        };
    };
    const question = progressionResult.join(' ');
    const answer = `${progressionResult[hiddenNum]}`
    return [question, answer]
};

export default function runGame() {
    basisOfTheGames(description, game);
}