const express = require('express');

const router = express.Router();
const IndexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', IndexController.getIndex);
router.get('/payment', (req, res) => {
  res.render('orders/ukassa_payment');
});

module.exports = router;
