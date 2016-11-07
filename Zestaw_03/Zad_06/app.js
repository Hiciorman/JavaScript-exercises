// Poniżej pokazano deﬁnicję prostego iteratora
function createGenerator() {
    var _state = 0;
    return {
        next: function () {
            return {
                value: _state,
                done: _state++ >= 10
            }
        }
    }
}
// i jej użycie w obiekcie umożliwiające iterowanie jego zawartości za pomocą for-of
var foo = {
    [Symbol.iterator]: createGenerator
};
console.log('foo:');
for (var f of foo)
    console.log(f);
// Pokazać jak sparametryzować deﬁnicję tego generatora czyli formalnie - zastąpić stałą
// 10, która pojawia się w ciele metody createGenerator przez parametr. Zdeﬁniować kilka
// różnych obiektów foo1, foo2 z generatorami zainicjowanymi różnymi wartościami argu-
// mentów.


function* createGenerator2() {
    for (var _state = 0; _state < this.max; _state++)
        yield _state;
}
console.log('\nfoo2:');
var foo2 = {
    max: 10,
    [Symbol.iterator]: createGenerator2
};
for (var f of foo2)
    console.log(f);

console.log('\nfoo3:');
var foo3 = {
    max: 4,
    [Symbol.iterator]: createGenerator2
};
for (var f of foo3)
    console.log(f);