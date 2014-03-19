/**
 * Created by Eva on 2/9/14.
 */

var express = require('express');
var app = express();

app.get('/kitties/:name?', function(req, res, next) {
     var name = req.params.name;

     switch(name ? name.toLowerCase() : '') {
         case 'traeger':
         case 'toby':
         case 'sabrina':
             res.send(name + ' is my favorite cat.');
             break;

         default:
             next();
    }
});

app.get('/kitties/*?', function(req, res) {
    res.send("I don't know any kitties by that name");
});

app.get('/?', function(req, res) {
    res.send('hello!');
});

var port = 8080;
app.listen(port);
console.log('listening on port' + port);