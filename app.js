const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Routes
app.get('/', (req,res) => {
    res.send('We are on home');
})

app.get('/posts', (req,res) => {
    res.send('We are on posts');
})

// Connect to database
mongoose.connect('mongodb+srv://roses99:franklin77@cluster0.ymt7u2n.mongodb.net/?retryWrites=true&w=majority', () =>
    console.log("Connected to database")
);

//Listen to server
app.listen(3000);