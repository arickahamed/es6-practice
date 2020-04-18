const ages = [12, 15, 13, 14];
const ages2 = [13, 15, 14, 16, 17];
const ages3 = [22, 25, 23, 24];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages,...ages2,...ages3];
console.log(allAges2);

const minister = 1000;
const teacher = 500;
const contractor = 2000;
const maximum = Math.max(minister, teacher, contractor);
console.log(maximum);

const takaPoisa = [400, 500, 300];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);