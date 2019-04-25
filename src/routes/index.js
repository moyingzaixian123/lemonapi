var express = require('express');
var router = express.Router();
let { delBill, addBill, findBill } = require('./index_api')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/delBill', delBill);
router.post('/addBill', addBill);
router.post('/findBill', findBill);

module.exports = router;