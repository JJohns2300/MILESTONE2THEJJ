const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//NEW USER TO-DO SCHEMA FUNCTION//
const TodoSchema = new Schema({
    Text: {
        type: String,
        required: true
    }, 
    complete: {
        type: Boolean, 
        default: false
    },
    timestamp: {
        type: String, 
        default: Date.now()
    }
})