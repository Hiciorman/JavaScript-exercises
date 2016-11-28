 Do prototypu funkcji drzewa binarnego z poprzedniego przykładu dodać iterator
(zaimplementowany jako generator przy użyciu yield), który pozwoli napisać

var root = new Tree(..... );
// enumeracja wartości z węzłów
for (var e of root) {
    console.log(e);
}