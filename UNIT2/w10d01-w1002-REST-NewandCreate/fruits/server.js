const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');

app.get('/fruits', (request, response)=>{
    response.render('index.ejs', {
        fruits: fruits
    });
});


app.get('/fruits/:indexOfFruitsArray', (request, response)=>{
    response.render('show.ejs',
        {
            fruit: fruits[request.params.indexOfFruitsArray]
        }
    );
});

app.listen(3000, ()=>{
    console.log('I am listening on port 3000');
});
