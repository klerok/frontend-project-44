export default function getRandomNum(min = 0, max = 100) {
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
}
