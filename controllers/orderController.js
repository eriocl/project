const {
  User, Order, OrderEntry, Bag, Size, Material, Color,
} = require('../db/models');

class OrderController {
  static async store(req, res) {
    try {
      const user = { ...req.body.user };
      const order = { ...req.body.order };
      const entry = { ...req.body.entry };
      const newUser = await User.create({ ...user });
      const newOrder = await Order.create({ ...order, user_id: newUser.id, paid: false });
      await OrderEntry.create({
        ...entry, order_id: newOrder.id, handles_color: 1, bot_color: 1,
      });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  static async show(req, res) {
    try {
      const orders = await OrderEntry.findAll({
        include: [Bag, Size, Material,
          { model: Color, as: 'bagColor' },
          { model: Color, as: 'handlesColor' },
          { model: Color, as: 'botColor' },
          { model: Order, include: [User] },
        ],
      });
      // console.log(orders);
      res.render('orders/index', { orders });
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

module.exports = OrderController;
