
const numbers = [2,4,6,7,8];

const doubled = numbers.map(n => n * 2);
console.log(doubled);


const fiveBonus = numbers.map(x => x + 5);
console.log(fiveBonus);

const halves = numbers.map(s => s/2);
console.log(halves);

const friends = ['tom', 'john', 'michael'];

const length = friends.map(friend => friend.length);
console.log(length);

const firstLetter = friends.map(friend => friend[0].toUpperCase());
console.log(firstLetter)