const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require ('dotenv/config');

// Import routes
const postsRoute = require('./routes/posts');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

// Routes
app.get('/', (req,res) => {
    res.send('We are on home');
})

// Connect to database
mongoose.connect(
    // Connects to our env file and the variable that represents the link with password
    process.env.DB_CONNECTION,
    {useNewUrlParser: true}, () =>
    console.log("Connected to database")
);

//Listen to server
app.listen(3000);

/* 
//if you wanted to create your own app with this api data now,
//in script.js on for instance codepen you would type:

fetch ('http://localhost:3000/posts')
.then(result => {
    return result.json();
})
.then(data => {
    console.log(data);
})

*/
