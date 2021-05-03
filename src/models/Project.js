const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true
    }
});

module.exports = mongoose.model("projectSchema", projectSchema);