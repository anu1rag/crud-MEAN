const mongoose = require('mongoose');

const ChildSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    sex : {
        type: String,
        required: true
    },
    dob : {
        type: String,
        required: true
    },
    father_name : {
        type: String,
        required: true
    },
    mother_name : {
        type: String,
        required: true
    },
    district_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'District'
    },
    photo : {
        type: String,
        
    },
    
});

module.exports = mongoose.model('Child', ChildSchema);