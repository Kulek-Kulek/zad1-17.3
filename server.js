var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');


var app = express();
app.use(bodyParser.json());


app.get('/getNote', function(req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
            if (err) throw err;
            var stringifyFile = data
            res.send(data);
            console.log('success');
        },
    )
});

app.post('/updateNote/:note', function(req, res) {
    var stringifyFile = req.params.note;

/* Mogę odwołać sie do moduły fs.appendFile i wtedy dopiszemy coś do pliku zachowująć jego pierwotny tekst*/ 
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        console.log('file updated');        
    });

    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        var stringifyFile = data;
        res.send(data);
        console.log(data);
        },
    )
});

app.listen(3000);