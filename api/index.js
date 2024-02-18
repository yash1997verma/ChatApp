const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

//middleware to parse json and url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//setting up db
const db = require('./config/mongoose')


//routes
const userRoutes = require('./routes/userRoutes');

app.get('/', (req, res)=>{
    res.send('Welcome to Chat App');
});
app.use('/user', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log("Server running"))