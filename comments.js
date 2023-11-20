//create a web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

//get all comments
router.get('/', function(req, res) {
  Comment.find(function(err, comments) {
    if (err) {
      console.log(err);
    } else {
      res.json(comments);
    }
  });
});

//get comment by id
router.get('/:id', function(req, res) {
  Comment.findById(req.params.id, function(err, comment) {
    if (err) {
      console.log(err);
    } else {
      res.json(comment);
    }
  });
});

//add comment
router.post('/', function(req, res) {
  var comment = new Comment(req.body);
  comment.save(function(err, comment) {
    if (err) {
      console.log(err);
    } else {
      res.json(comment);
    }
  });
});

//update comment
router.put('/:id', function(req, res) {
  var query = {
    _id: req.params.id
  };
  var update = {
    $set: {
      comment: req.body.comment,
      username: req.body.username,
      date: req.body.date
    }
  };
  var options = {
    new: true
  };
  Comment.findOneAndUpdate(query, update, options, function(err, comment) {
    if (err) {
      console.log(err);
    } else {
      res.json(comment);
    }
  });
});

//delete comment
router.delete('/:id', function(req, res) {
  var query = {
    _id: req.params.id
  };
  Comment.findOneAndRemove(query, function(err, comment) {
    if (err) {
      console.log(err);
    } else {
      res.json(comment);
    }
  });
});

module.exports = router;