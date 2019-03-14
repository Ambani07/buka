const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const FakeDB = require('./fake-db');
const booksRoutes = require('./routes/books');
const usersRoutes = require('./routes/users');


mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
    const fakeDB = new FakeDB();

    fakeDB.seedDB();
});

const app = express(); //call express 

//body parser middleware
app.use(bodyParser.json());

app.use('/api/v1/books', booksRoutes);

app.use('/api/v1/users', usersRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('I am running'); 
});