const router = require('express').Router();
const OrderController = require('../controllers/orderController');

router.route('/')
  .get(OrderController.show)
  .post(OrderController.store);

module.exports = router;
