import { getRandomNum, basisOfTheGames } from "../index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
    if (num === 1) {
        return 'no';
    };
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return 'no';
        };
    };
    return 'yes';
};

const game = () => {
    const num = getRandomNum(1, 100);
    const question = `${num}`;
    const answer = isPrime(question);
    return [question, answer];
};

export default function runGame() {
    basisOfTheGames(description, game);
};