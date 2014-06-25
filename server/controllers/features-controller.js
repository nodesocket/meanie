var Feature = require('../models/feature');

module.exports.get = function(req, res) {
    Feature.find({}, function(err, results) {
        res.json(results);
    });
};

module.exports.create = function(req, res) {
    var feature = new Feature(req.body);

    feature.save(function(err, result) {
        res.json(result);
    });
};