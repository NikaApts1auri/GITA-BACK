// console.log("1");
// setTimeout(() => console.log("2"), 100);
// setTimeout(() => console.log("3"), 0);
// Promise.resolve().then(() => console.log("4"));
// console.log("5");

// result 1 5 4 3 3

//2
// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => {
//   console.log("3");
//   setTimeout(() => console.log("4"), 0);
// });
// console.log("5");

//result 1 5 2 3 4

//3

// const sleep = (ms) => new Promise((r) => setTimeout(a, b));

// (async () => {
//   console.log("start");
//   await sleep(1000);
//   console.log("end");
// })();
//4
// function commonNumber(target) {
//   console.log("", target);

//   const interval = setInterval(() => {
//     const rand = Math.floor(Math.random() * 20) + 1;
//     console.log("random:", rand);

//     if (rand === target) {
//       console.log("common");
//       clearInterval(interval);
//       ს;
//     }
//   }, 1000);
// }

// commonNumber(7);
//5

function countdown(start, interval) {
  let curr = start;

  const timer = setInterval(() => {
    console.log(curr);
    curr--;

    if (curr < 0) {
      clearInterval(timer);
    }
  }, interval);
}

countdown(5, 1000);
