const COUNT_MIN = 2;
const COUNT_MAX = 5;
const MIN_LETTER = 97; // a
const MAX_LETTER = 122; // z

const getRandomChar = () => {
  const charCode =
    Math.floor(Math.random() * (MAX_LETTER - MIN_LETTER + 1)) + MIN_LETTER;
  return String.fromCharCode(charCode);
};

const getRandomEngLetter = () => {
  const count =
    Math.floor(Math.random() * (COUNT_MAX - COUNT_MIN + 1)) + COUNT_MIN;

  return Array.from({ length: count }, () => getRandomChar()).join("");
};

export default getRandomEngLetter;
