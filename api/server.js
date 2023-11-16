const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express ('');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/milestone2thejj", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connect to Datbase"))
    .catch(console.error);

app.listen(3001);
