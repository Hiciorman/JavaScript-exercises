// Napisać własne implementacje metod map, forEach i filter dla tablic. Zademon-
// strować przygotowane implementacje w praktyce, przekazując funkcje zwrotne w postaci
// zwykłej i jako lambda wyrażenia.

function forEach( a, f ) {
    for(var x of a){
        f(x);
    }
}

function map( a, f ) {
    var result = [];
    for(var x of a){
        result.push(f(x));
    }

    return result;
}

function filter( a, f ) {
    var result = [];
    for(var x of a){
        if(f(x)){
            result.push(x);
        }
    }
    
    return result;
}

var a = [1,2,3,4];
forEach( a, _ => { console.log( _ ); } );
// [1,2,3,4]

var xx = filter( a, _ => _ < 3 );
console.log(xx);
// [1,2]

var yy = map( a, _ => _ * 2 );
console.log(yy);
// [2,4,6,8]