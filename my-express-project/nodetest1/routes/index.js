var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET UserList */
router.get('/userlist', function(req, res) {
    console.log('funcao userlist 0()');
    var db = req.db;
    console.log('funcao userlist 1()');
    var collection = db.get('usercollection');
    collection.find({},{}, function(e, docs) {

        console.log('funcao userlist 1.1()');
        res.render('userlist', {

            'userlist': docs

        });

        console.log('funcao userlist 1.2()');

    });

});

/* GET NewUser page */
router.get('/newuser', function(req, res) {

    var res = res.render('newuser', { title: 'add new user' });

});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    console.log('chamando funcao 1()');
    // Set our internal DB variable
    var db = req.db;

    console.log('chamando funcao 2()');

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    console.log('chamando funcao 3()');

    // Set our collection
    var collection = db.get('usercollection');

    console.log('chamando funcao 4()');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            console.log('chamando funcao 4.1');
            // And forward to success page
            res.redirect("userlist");
            console.log('chamando funcao 4.2');
        }
    });
});

module.exports = router;
