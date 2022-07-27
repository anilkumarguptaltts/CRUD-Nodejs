var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var StudentModel = require('./studentschema');

// Connecting to database
var query = 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000';

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
    console.log("connect database");
	if (error) {
		console.log("Error!" + error);
	}
});

console.log("connect database-------->2");
router.get('/save', function(req, res) {
    console.log("connect database-------->3");
    var newStudent = new StudentModel({StudentId:102, 
        Name:"Sam2", Roll:2, Birthday:2001-09-08});
        console.log("connect database-------->4",newStudent);
    newStudent.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.get('/findall', function(req, res) {
    StudentModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });

 router.get('/update', function(req, res) {
    console.log("connect database-------->delete");
    StudentModel.findByIdAndUpdate('62e12b5ffd55350a8f462602', 
    {Name:'AKG'}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});

 router.get('/delete', function(req, res) {
    console.log("connect database-------->delete");
    StudentModel.remove({StudentId:101}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});
module.exports = router;
