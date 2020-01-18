const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(request, response) {
    response.send('<h1>Hello Coders.Tokyo!</h1>');
});

app.get('/user', function(request, response) {
    response.send('User list');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});