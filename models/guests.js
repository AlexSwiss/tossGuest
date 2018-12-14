const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const guestSchema = new Schema({
    name: {
        type: String,
        required: [true, "can't be blank"]
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
    },
    phone: {
        type: String,
        required: [true, "cant be blank"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Guest = mongoose.model('guest', guestSchema);