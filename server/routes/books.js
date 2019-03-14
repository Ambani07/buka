const express = require('express');
const router = express.Router();
const Book = require('../model/book');

const UserCrlt = require('../controllers/user');

router.get('/secret', UserCrlt.authMiddleware, function(req,res){
    res.json({"secret": true});
});

router.get('', function(req, res){


    Book.find({}, function(err, foundBook){
        
        if(err){
            res.status(422).send({errors: [{title: 'Book Error!', detail: 'Could not find Book!'}]});
        }
        
        res.json(foundBook);

    });
});

router.get('/:id', function(req, res){
    const bookId = req.params.id;

    Book.findOne({"_id" : bookId}, function(err, foundBook){
        
        if(err){
            res.status(422).send({errors: [{title: 'Book Error!', detail: 'Could not find Book!'}]});
        }
        
        res.json(foundBook);

    });

});

module.exports = router;