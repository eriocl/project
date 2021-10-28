const router = require('express').Router();
const OrderController = require('../controllers/orderController');

router.route('/')
  .post(OrderController.store);

module.exports = router;
