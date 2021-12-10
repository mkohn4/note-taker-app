const express = require('express');
const htmlRoute = require('./routes/html/index');

const app  = express();

app.use(express.static('public'));

//when user navigates to homepage, show index.html
app.use('/', htmlRoute);

app.listen(3001, () => {
    console.log('HTML is done');
})