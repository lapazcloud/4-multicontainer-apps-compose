var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var ReportSchema = new Schema({
    pollId: String,
    name: String,
    results: String
});

// Compile model from schema
var ReportModel = mongoose.model('ReportModel', ReportSchema );

module.exports = ReportModel;