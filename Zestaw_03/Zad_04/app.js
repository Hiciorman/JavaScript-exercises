// Na wykładzie pokazano przykład funkcji, która w swoim dokmnięciu ”łapie” zmienną
// lokalną w sposób niekoniecznie zgodny z oczekiwaniami.

function createFs(n) { // tworzy tablicę n funkcji
    var fs = []; // i-ta funkcja z tablicy ma zwrócić i
    for (var i = 0; i < n; i++) {
        fs[i] = () => i;
    };
    return fs;
}
var myfs = createFs(10);
console.log(myfs[0]()); // zerowa funkcja miała zwrócić 0
console.log(myfs[2]()); // druga miała zwrócić 2
console.log(myfs[7]());
// // 10 10 10

// Powiedziano że jednym ze sposobów skorygowania tego nieoczekiwanego zachowania jest
// zastąpienie var przez let. Powiedziano też, że istnieje inny sposób, polegający na dodaniu
// dodatkowego zagnieżdżenia funkcji w funkcji, który dla każdej iteracji pętli for utworzy
// nowy kontekst wiązania domknięcia.
// Zademonstrować ten sposób. Formalnie - tak zmodyﬁkować powyższy kod żeby pozostawić
// deﬁnicję var i przy pętli for ale zmienić sposób przypisania funkcji w instrukcji fs[i]
// = ....
// Wskazówka (znacznie ułatwiająca rozwiązanie): rozszerzenie języka o let pojawiło się
// stosunkowo niedawno i nie jest obsługiwane przez starsze przeglądarki. Dlatego w praktyce
// do zamiany współczesnego dialektu (ES6) na jego starszą wersję (ES5) rozumianą przez
// przeglądarki używa się technologii Babel, pokazanej na wykładzie. Co zrobi Babel kiedy w
// powyższym kodzie spróbuje się zastosować pierwszą z metod, czyli zamianę var na let?


function createFs2(n) {
    var fs = []; 
    var _loop = function _loop(i) {
        fs[i] = function () {
            return i;
        };
    };

    for (var i = 0; i < n; i++) {
        _loop(i);
    };

    return fs;
}

var myfs2 = createFs2(10);
console.log(myfs2[0]()); // zerowa funkcja miała zwrócić 0
console.log(myfs2[2]()); // druga miała zwrócić 2
console.log(myfs2[7]());