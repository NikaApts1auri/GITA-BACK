// 1)
// const arr = ["one", "two", "three"];
// const result = arr.map((el) => el.slice(0, -1));
// console.log(result);

// 2)

// const arr = [19, 5, 42, 2, 77];
// arr.sort((a, b) => a - b);

// const result = arr[0] + arr[1];
// console.log(result);

// const arr = [
//   { amount: 10, currency: "USD" },
//   { amount: 20, currency: "EUR" },
//   { amount: 5, currency: "USD" },
//   { amount: 50, currency: "EUR" },
// ];

// const sortedByCyrrency = arr.reduce((acc, { amount, currency }) => {
//   if (!acc[currency]) {
//     acc[currency] = [];
//   }
//   acc[currency].push({ amount });
//   return acc;
// }, {});

// console.log(sortedByCyrrency);

//4

// const arr = [10, -20, 5, -45, 0, 20, -10];

// const result = arr.reduce(
//   (sum, num) => {
//     if (num >= 0) sum[0]++;
//     else if (num < 0) sum[1] += num;
//     return sum;
//   },
//   [0, 0]
// );
// console.log(result);

// 5)

// const arr = [10, 12, 4, 2];

// let sum = 0;
// arr.forEach((num) => {
//   sum += num;
// });
// console.log(sum);

//6)
// const arr = ["cat", "parrot", "dog", "elephant"];
// filteredArr = arr.filter((element) => element.length >= 5);
// const result = filteredArr.join("#");
// console.log(result.toUpperCase());
//7
const students = [
  { name: "Ann", cls: "A", grade: 90 },
  { name: "Ben", cls: "B", grade: 75 },
  { name: "Cara", cls: "A", grade: 80 },
];

const averages = students.reduce((acc, { cls, grade }) => {
  if (!acc[cls]) acc[cls] = { sum: 0, count: 0 };

  acc[cls].sum += grade;
  acc[cls].count += 1;

  acc[cls].average = acc[cls].sum / acc[cls].count;

  return acc;
}, {});

for (const cls in averages) {
  averages[cls] = averages[cls].average;
}

console.log(averages);
