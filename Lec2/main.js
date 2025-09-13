//1
function getAbbr(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .join(".");
}
console.log(getAbbr("John Doe"));
//2
function getSum(number) {
  return String(number) // სპლიტს რომ ემუშავა
    .split("")
    .reduce((sum, d) => sum + +d, 0);
}
console.log(getSum(123));
//3
function removeDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeDuplicates("banana"));
//4
function removeSpaces(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}
console.log(removeSpaces("1 2 aab"));
//5
function reverseEachWord(sentence) {
  return sentence.split(" ").map((word) => word.split("").reverse().join(""));
}
console.log(reverseEachWord("Hello World"));
