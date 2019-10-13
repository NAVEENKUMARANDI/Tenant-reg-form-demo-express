var express = require('express');
var router = express.Router();
const loginDBService = require('../database/LoginDBService');

router.post('/', function (req, res) {
    console.log('Before calling Get login request :'+ JSON.stringify(req.body));
    //res.send('Respond for Get Tenant Request....');
    let { userName: userName, password: password } = req.body;
    loginDBService.validateUser(res);
    console.log('After calling Login:');
})
module.exports = router;