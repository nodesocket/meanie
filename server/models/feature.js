var mongoose = require('mongoose');

module.exports = mongoose.model('Feature', {
    title: String,
    body: String,
    icon: String
});