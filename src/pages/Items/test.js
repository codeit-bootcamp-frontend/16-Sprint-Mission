const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4, 5];

console.log(a.every((v, i) => v === b[i]) ? 'a' : 'b');
