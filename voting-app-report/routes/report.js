var express = require('express');
var ReportModel = require('../models/report');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
    const report = new ReportModel(req.body);
    report.save(function (err, res) {
        if (err) console.log ('Error on save!');
    });
});

router.post('/:id', function(req, res) {
    var pollId = req.params.id;
    var vote = req.body;
    ReportModel.findOne({ pollId: pollId}, function(err, report) {
        if (err) {
            console.log ('Error on load!');
        } else {
            let results = JSON.parse(report.results);
            for (let i in results) {
                if (results[i].id === vote.pollOption) {
                    results[i].count++;
                }
            }
            report.results = JSON.stringify(results);
            report.save(function (err) {
                if (err) {
                    console.log ('Error on save!');
                }
                res.json({msg: 'success'});
            });
        }
    });
});

module.exports = router;
