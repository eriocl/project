const {
  Bag, Size, Material, Color, Order,
} = require('../db/models');

class IndexController {
  static async getIndex(req, res) {
    const bags = await Bag.findAll({ raw: true });
    const sizes = await Size.findAll({ raw: true });
    const materials = await Material.findAll({ raw: true });
    const colors = await Color.findAll({ raw: true });
    console.log(colors);
    res.render('index', { title: 'Express' });
  }
}

module.exports = IndexController;
