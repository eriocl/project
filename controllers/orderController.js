class OrderController {
  static async store(req, res) {
    try {
      console.log(req.body);
      const {} = req.body;
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

module.exports = OrderController;
