import readlineSync from 'readline-sync';

export const getRandomNum = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const basisOfTheGames = (description, game) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');

  const name = () => readlineSync.question('May I have your name? ');
  const userName = name();
  console.log(`Hello, ${userName}`);

  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return `Let's try again, ${userName}`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};
