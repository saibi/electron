// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyz = '1234';
// console.log(xyz);
// const calcAge = (birthYear) => 2023 - birthYear;

// console.log(calcAge(1991));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let newTemps = [];

//   console.table(temps);
//   for (let i = 0; i < temps.length; i++) {
//     console.log(temps[i], typeof temps[i]);
//     if (typeof temps[i] == 'number') newTemps.push(temps[i]);
//   }
//   console.log(newTemps);

//   newTemps = newTemps.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
//   console.log(newTemps);
//   console.log(newTemps[0], newTemps[newTemps.length - 1]);
//   return newTemps[newTemps.length - 1] - newTemps[0];
// };

// console.log(calcTempAmplitude(temperatures));

function printForecast(arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}C in ${i + 1} days `;
  }
  str += '...';

  console.log(str);
}

printForecast([17, 21, 23]);
