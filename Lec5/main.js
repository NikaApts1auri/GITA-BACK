//1
// function removeProp(obj, prop) {
//   const copy = { ...obj };
//   delete copy[prop];
//   return copy;
// }

// const user = { name: "Nika", age: 25, password: "1234" };
// const safe = removeProp(user, "password");
// console.log(safe);
// console.log(user);
//2
// const leaderboard = (players) => {
//   return players
//     .sort((a, b) => b.score - a.score)
//     .map((player, index) => ({
//       ...player,
//       rank: index + 1,
//     }));
// };

// const arr = [
//   { name: "Ana", score: 50 },
//   { name: "Nika", score: 80 },
//   { name: "Luka", score: 70 },
// ];

// console.log(leaderboard(arr));

//3
// const getLongestTitle = (movies) => {
//     return movies.reduce((longest, current) => {
//       return current.title.length > longest.title.length ? current : longest;
//     });
//   };

//   const arr = [
//     { title: "Up", year: 2009 },
//     { title: "The Lord of the Rings", year: 2001 }
//   ];

//   console.log(getLongestTitle(arr));

//4
// const avgAgeByDept = (employees) => {
//   const grouped = employees.reduce((acc, { dept, age }) => {
//     if (!acc[dept]) {
//       acc[dept] = { total: 0, count: 0 };
//     }
//     acc[dept].total += age;
//     acc[dept].count += 1;
//     return acc;
//   }, {});

//   const result = {};
//   for (let dept in grouped) {
//     result[dept] = Math.floor(grouped[dept].total / grouped[dept].count);
//   }

//   return result;
// };

// const data = [
//   { name: "Ana", dept: "HR", age: 25 },
//   { name: "Nika", dept: "IT", age: 30 },
//   { name: "Luka", dept: "IT", age: 22 },
// ];

// console.log(avgAgeByDept(data));
//5
// const countWords = (comments) => {
//   return comments.reduce((total, { comment }) => {
//     const words = comment.trim() ? comment.trim().split(/\s+/) : [];
//     return total + words.length;
//   }, 0);
// };

// const arr = [
//   { id: 1, comment: "Hello world" },
//   { id: 2, comment: "This is great!" },
//   { id: 3, comment: "" },
// ];

// console.log(countWords(arr));
