const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const registerRoute = require('./routes/register');
const app = express();

const uri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_SECRET}@cluster0.ghwbfpe.mongodb.net/OnlyCodersTest?retryWrites=true&w=majority`
console.log(uri)
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected'))
    .catch(err => console.error('Something went wrong', err));

app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use('/api',[registerRoute]);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Started on Port: ${port}`)
});