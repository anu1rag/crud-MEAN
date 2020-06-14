const mongoose = require('mongoose');

const DistrictSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    state_id : {
        type: Number,
        required: true
    },
    district_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('District', DistrictSchema);