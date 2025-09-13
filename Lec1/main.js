//1
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(100));
//2
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("nika"));
//3
function countWords(words) {
  return words.trim().split(/\s+/).length;
}
console.log(countWords("Hello nika"));
//4
function countXmovn(word) {
  return (word.match(/[aeiouAEIOU]/g) || []).length;
}
console.log(countXmovn("nika"));
//5
function factorial(n) {
  if (n > 0) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
console.log(factorial(5));
//6
function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumEvenNumbers(10));
//7
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "E";
  } else {
    return "F";
  }
}
console.log(getGrade(95));
//8

function validatePassword(password) {
  if (password.length <= 8) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
  return true;
}
