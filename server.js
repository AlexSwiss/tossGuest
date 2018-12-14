const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const guests = require('./routes/api/guests');

const app = express();

//bodyParser midddleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Database connected..'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/guests', guests);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));