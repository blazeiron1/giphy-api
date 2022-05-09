var express = require('express');
var router = express.Router();
var giphyController = require('../controllers/giphys-controller');

router.get('/',giphyController.index);
router.get('/:id', giphyController.show);
module.exports = router;
