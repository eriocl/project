const express = require('express');

const router = express.Router();
const IndexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', IndexController.getIndex);

module.exports = router;
