//Napisać iteracyjną i rekurencyjną wersję algorytmu wyznaczającego n-tą liczbę Fibbonacciego.
//Napisać kod który zmierzy czasy wykonania obu wersji i wypisze na konsoli w
//postaci tabeli dla n od 10 do ...? (no właśnie, do jakiej wielkości n obliczenie czasu jeszcze
//ma sens dla algorytmu rekurencyjnego?).
//Pomiary powtórzyć w przeglądarce Chrome oraz w środowisku node.js. Czy występują
//jakieś istotne różnice w pomiarach?

//Testy:
//Wersja rekurencyjna:
//42 - 4600ms
//43 - 7500ms

const fib = require('./fibonacci');

var fibonaciNumber = 25;

console.time('Fibonnacci rekurencyjnie')
var result = fib.Recursively(fibonaciNumber);
console.timeEnd('Fibonnacci rekurencyjnie');

console.log(result);


console.time('Fibonnacci iteracyjnie')
var result = fib.Iteratively(fibonaciNumber);
console.timeEnd('Fibonnacci iteracyjnie');

console.log(result);