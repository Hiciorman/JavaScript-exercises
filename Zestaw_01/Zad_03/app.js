//Napisać program, który wyznacza zbiór liczb pierwszych między 2 a 100000. Zastosować
//metodę najprostszą algorytmicznie, niekoniecznie wydajną obliczeniowo (za wydajny
//algorytm nie będzie dodatkowych punktów).

const max = 100000;
const sqrt = Math.floor(Math.sqrt(max));
var array = new Array(max);
var tmp;

for (i = 2; i < max; i++) {
    array[i] = true;
}

for (i = 2; i < sqrt; i++) {
    if (array[i]) {
        tmp = i + i;
        while (tmp <= max) {
            array[tmp] = 0;
            tmp += i;
        }
    }
}

for (i = 2; i <= max; i++) {
    if (array[i])
        console.log(i);
}