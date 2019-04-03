//importing express
const express = require('express');

//importing path
const path = require('path');

//initializing express method 
const app = express();

app.use(express.static('./component'))

app.get('/', (req, res) => {
	res.render('index');
})

app.listen(5000, () => {
    console.log('started at 5000');
})