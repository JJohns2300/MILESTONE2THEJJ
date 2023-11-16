const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express ('');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/milestone2thejj", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})  //CALLBACK FUNCTION TO CONNECT TO DATABASE//
    .then(() => console.log("You have connected to the database!"))
    .catch(console.error);

const
app.listen(3001, () => console.log(("Server opened on port 3001")));
