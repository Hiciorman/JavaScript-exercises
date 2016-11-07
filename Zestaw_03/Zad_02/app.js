// Napisać jeszcze raz rekurencyjną implementację funkcji fib(n) ale tym razem użyć
// pokazanej na wykładzie techniki memoizacji. Porównać czasy obliczeń z poprzednimi im-
// plementacjami.

//Wersja rekurencyjna (poprzednia):
//42 - 11761.548ms


var fibbonaci = function () {
    var memo = {};

    function f(n) {
        var value;

        if (n in memo)
            value = memo[n];
        else {
            if (n === 0 || n === 1)
                value = n;
            else
                value = f(n - 1) + f(n - 2);

            memo[n] = value;
        }

        return value;
    }
    return f;
}();

console.time('Fibonnacci rekurencyjnie')
var result = fibbonaci(67);
console.timeEnd('Fibonnacci rekurencyjnie');