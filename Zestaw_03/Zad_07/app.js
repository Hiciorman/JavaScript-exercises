// Zarówno iteratory jak i generatory mogą być ”nieskończone”, czyli zawsze zwracać
// kolejną wartość. Zaimplementować takie nieskończone generatory dla liczb ﬁbonacciego:
// zwykły iterator (zwracający obiekt z funkcją next) oraz generator (czyli funkcję wewnętrz-
// nie używającą yield do zwracania kolejnych wartości).
function fib() {
    var _state = 0;
    var fib1 = 0;
    var fib2 = 1;

    return {
        next: function () {
            var result = fib1;
            fib1 = fib2;
            fib2 = result + fib1;
            return {
                value: result,
                done: _state++ == 20
            }
        }
    }
}

function* fib2() {
    var fib1 = 0;
    var fib2 = 1;

    for (var i = 0; i < 20; i++) {
        var result = fib1;
        fib1 = fib2;
        fib2 = result + fib1;
        yield result;
    }
}
// W obu przypadkach możliwe jest iterowanie się po kolejnych wartościach za pomocą po-
// kazanej na wykładzie konstrukcji
var _it = fib();
for (var _result; _result = _it.next(), !_result.done;) {
    console.log(_result.value);
}
// Czy w którymś z przypadków możliwe jest iterowanie się po kolejnych wartościach za
// pomocą for-of:
for (var i of fib2()) {
    console.log(i);
}

//tak w przypadku generatora

