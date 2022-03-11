const nums = [1, 2, 3, 4, 5];
let answer1 = nums.map((num) => num * num);
console.log(answer1);

const names = ["alice", "bob", "charlie", "danielle"];
let answer2 = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(answer2);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
let answer3 = pokemon.map((p) => `<p>${p}</p>`);
console.log(answer3);
