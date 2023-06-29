//sort
const names = ["Donald", "Aaron", "Buzz"];

names.sort();
console.log(names);
// 1. Сортирует строки по алфавиту "из коробки", т.е. без доп. параметров

const names2 = ["Donald", "Aaron", "Buzz", "bob", "Юра", "игорь"];
names2.sort();
console.log(names2);
// 2. Сортирует строки по unicode "из коробки", т.е. без доп. параметров

console.log(names === names.sort());
// возвращает ссылку на исходный массив

const nums = [1000, 777, 33333, 9999999];
console.log(nums.sort());
//Для остальных случаев необходимо параметром передать функцию сравнения
//(callback)

const compFn = (a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
}; //по возрастанию

const compareFunction = (a, b) => a - b;

console.log(nums.sort(compareFunction));
// функция сравнения должна возвращать число большее или меньшее  0

console.log(nums.reverse());
//вместе с sort(), часто используется reverse()

const people = [{
    name: "alice", age: 25, isMarried: true, scores: 90,
}, {
    name: "Bob", age: 30, isMarried: false, scores: 85,
}, {
    name: "Charlie", age: 20, isMarried: false, scores: 70,
}, {
    name: "diana", age: 27, isMarried: true, scores: 95,
}, {
    name: "Edward", age: 22, isMarried: false, scores: 75,
}];
console.log(people.sort((a, b) => a.name - b.name));
console.log(people.sort((a, b) => a.scores - b.scores));
console.log(people.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    } else {
        return -1;
    }
}));

console.log(people.sort((a, b) => a.name.localeCompare(b.name)));


const numbers = [27, 10, 36, 50, 1, 3, 2, 9, 7, 8, 2, 3, 5, 5, 6];
let step = 0;

for (let j = 0; j < numbers.length - 1; j++) {
    let isSorted = true;
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            isSorted = false;
            [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
            step++;
        };
        step++;
    }
    if (isSorted) break
}

console.log(numbers);
console.log(step);