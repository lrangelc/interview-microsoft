console.clear();

const isPalindrome = (phrase) => {
  const len = phrase.length;
  for (let i = 0; i < len / 2; i++) {
    if (phrase[i] !== phrase[len - 1 - i]) {
        return false;
    }
  }
  return true;
};

console.log(isPalindrome('hola'));
console.log(isPalindrome('anna'));
console.log(isPalindrome('madam'));
