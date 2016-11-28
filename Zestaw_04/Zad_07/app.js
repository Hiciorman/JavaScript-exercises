const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('test.txt')
});

var ip = function (address) {
    this.address = address;
    this.counter = 0;
}

var regex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
var list = [];

rl.on('line', (line) => {
    var address = line.match(regex)[0];
    var index = list.findIndex(x => x.address === address);

    if (index === -1)
        list.push(new ip(address));
    else
        list[index].counter++;

}).on('close', () => {
    for (var element of list)
        console.log(element.address + ' - ' + element.counter);
});
