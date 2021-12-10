const express = require('express');
const htmlRoute = require('./routes/html/index');
const PORT = process.env.PORT || 3001;
const api = require('./routes/api');

const app  = express();
//serve up all assets from public folder
app.use(express.static('public'));
//this allows you to return the json format
app.use(express.json());
//when user navigates to homepage, show index.html
app.use('/api', api);
app.use('/', htmlRoute);



//console log when user hits the server route
app.listen(PORT, () => {
    console.log('HTML is done');
})