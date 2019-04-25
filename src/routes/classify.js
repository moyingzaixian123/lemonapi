var express = require('express');
var router = express.Router();
let { getCustom, getclassify, addclassify } = require('./classify_api')
    /* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/getCustom', getCustom);
router.post('/getclassify', getclassify);
router.post('/addclassify', addclassify);

module.exports = router;