const { User, Order, Entry } = require('../db/models');

class OrderController {
  static async store(req, res) {
    res.sendStatus(200);
    try {
      console.log(req.body);
      const user = { ...req.body.user };
      const order = { ...req.body.order };
      const entry = { ...req.body.entry };
      // const newUser = User
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

module.exports = OrderController;
