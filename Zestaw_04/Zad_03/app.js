var topSecret = function () {
    var info = 'UFO exists';

    return {
        get: function () {
            return info;
        },
        set: function (val) {
            info = val;
        }
    };
} ();

console.log(topSecret.get());
//console.log(info);