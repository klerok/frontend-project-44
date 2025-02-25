import readlineSync from 'readline-sync';

export default function name() {
  return readlineSync.question('May I have your name? ');
}
