const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    state_name : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('State', StateSchema);