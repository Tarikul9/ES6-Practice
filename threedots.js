const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// console.log(allAges);

const takaPoisha = [650, 850, 790, 240];
const maximum = Math.min(...takaPoisha);
console.log(maximum);