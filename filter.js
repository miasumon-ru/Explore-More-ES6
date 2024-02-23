const numbers = [1,2,5,7,8,9,6,4,3];

const players = [75,65,67,72,55,59];

// filter works in an array on the based of condition and returns an array
// const selected = players.filter(player => player > 70);
const selected = players.filter(player => player < 70);
console.log(selected);


const friends = ['tom', 'john', 'michael', 'oliver'];

const result = friends.filter(f => f.length<4);
console.log(result)