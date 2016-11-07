// Próba iterowania nieskończonych iteratorów/generatorów takich jak w poprzednim
// zadaniu powoduje problem - taki nieskończony iterator/generator zawsze zwraca kolejną
// wartość i naiwne iterowanie nigdy się nie kończy.
// Pokazać jak rozwiązać ten problem za pomocą dodatkowej funkcji generującej, która jako
// argumenty przyjmuje iterator/generator oraz liczbę elementów które powinna zwrócić i
// zwraca dokładnie taką, skończoną liczbę elementów:

function* fib() {
    var fib1 = 0;
    var fib2 = 1;

    while(true) {
        var result = fib1;
        fib1 = fib2;
        fib2 = result + fib1;
        yield result;
    }
}

function* take(it, top) {
    var i = 0;
    for (let x of it) {
        yield x;
        if (i++ == top) {
            break;
        }
    }
}
// zwróć dokładnie 10 wartości z potencjalnie
// "nieskończonego" iteratora/generatora
for (let num of take(fib(), 10)) {
    console.log(num);
}