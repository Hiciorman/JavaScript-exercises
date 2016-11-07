// Napisać funkcję przyjmującą dowolną liczbę argumentów, która policzy ich sumę.

function sum(...args) {
    //redukuje tablicę do wartości
    console.log(args.reduce((a, b) => a + b, 0));
}
sum(1, 2, 3);
// 6
sum(1, 2, 3, 4, 5);
// 15
sum(41,17,99);
// 157