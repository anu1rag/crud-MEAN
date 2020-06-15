const mongoose = require('mongoose');

const DistrictSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    state_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'State'
    },
    district_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('District', DistrictSchema);