// Pokazać jak zdeﬁniować nowy obiekt zawierający co najmniej jedno pole, jedną me-
// todę oraz właściwości z akcesorami get i set. Pokazać jak do istniejącego obiektu dodać
// nowe pole, nową metodę i nową właściwość z akcesorami get i set.
// Uwaga. Do dodawania nowych składowych do istniejących obiektów można użyć metody
// Object.defineProperty. Które z w/w rodzajów składowych (pole, metoda, właściwość)
// mogą być dodawane w ten sposób, a które muszą być dodawane w ten sposób (bo inaczej
// się nie da)?

var person = {
    first_name: 'John',
    last_name: 'Rambo',
    full_name: function () {
        return this.first_name + ' ' + this.last_name;
    },
    _age: 69,
    get age() {
        return person._age;
    },
    set age(arg) {
        person._age = arg;
    }
}

console.log('Name: ' + person.full_name())
console.log('Age: ' + person.age)

person.height = 184;
console.log('Height: ' + person.height);

person.say = function () {
    return 'For me civilian life is nothing!' +
        'In the field we had a code of honor, you watch my back, I watch yours.';
}

console.log('Quotation: ' + person.say());

Object.defineProperty(person, 'kills', {
    get: function () {
        return 279;
    }
});

console.log('Kills: ' + person.kills);	