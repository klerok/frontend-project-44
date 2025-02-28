import readlineSync from 'readline-sync';
import name from './cli.js'

export default function basisOfTheGames (description, game) {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');

  const userName = name();
  console.log(`Hello, ${userName}`);

  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
