//Napisać program, który wyznacza zbiór wszystkich liczb natualnych 1 a 100000, które
//są podzielne zarówno przez każdą ze swoich cyfr z osobna jak i przez sumę swoich cyfr.

var isValid = true;
var arrayResult = [];
var sum = 0;
var tmp;

for (i = 1; i < 100000; i++) {
    var j = i;
    while (j > 0) {
        tmp = j % 10;
        if (i % tmp != 0) {
            isValid = false;
            break;
        }

        sum += tmp;
        j = Math.floor(j / 10);
    }

    if (i % sum != 0)
        isValid = false;

    if (isValid)
        arrayResult.push(i);

    isValid = true;
    sum = 0;
}

arrayResult.forEach(function (element) {
    console.log(element);
}, this);