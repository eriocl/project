const { User, Order, Entry } = require('../db/models');

class OrderController {
  static async store(req, res) {
    res.sendStatus(200);
    try {
      console.log(req.body);
      const user = { ...req.body.user };
      const order = { ...req.body.order };
      const entry = { ...req.body.entry };
      const newUser = await User.create({ ...user });
      const newOrder = await Order.create({ ...order, user_id: newUser.id });
      const newEntry = await Entry.create({ ...entry, order_id: newOrder.id });
      console.log(newUser);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

module.exports = OrderController;
