const fs = require('fs');

function readAsync(fileName) {
    fs.readFile(fileName, 'utf-8',
        function (err, data) {
            console.log(data);
        }
    )
}

readAsync('./test.txt');