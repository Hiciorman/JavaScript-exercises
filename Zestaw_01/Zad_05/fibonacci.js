module.exports = {
    Recursively: function fib(x){
        if (x == 0)
            return 0;
        if (x == 1)
            return 1;

        return fib(x - 1) + fib(x - 2);
    },
    Iteratively: function (x) {
        var fib0 = 0;
        var fib1 = 1;
        var result = 0;

        for (i = 2; i <= x; i++) {
            result = fib1 + fib0;
            fib0 = fib1;
            fib1 = result;
        }

        return result;
    }
};