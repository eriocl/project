const { User, Order, OrderEntry } = require('../db/models');

class OrderController {
  static async store(req, res) {
    try {
      console.log(req.body);
      const user = { ...req.body.user };
      const order = { ...req.body.order };
      const entry = { ...req.body.entry };
      console.log(entry);
      const newUser = await User.create({ ...user });
      const newOrder = await Order.create({ ...order, user_id: newUser.id, paid: false });
      const newEntry = await OrderEntry.create({
        ...entry, order_id: newOrder.id, handles_color: 1, bot_color: 1,
      });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

module.exports = OrderController;
