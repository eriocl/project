const {
  Bag, Size, Material, Color,
} = require('../db/models');

class IndexController {
  static async getIndex(req, res) {
    const bags = await Bag.findAll({ raw: true });
    const sizes = await Size.findAll({ raw: true });
    const materials = await Material.findAll({ raw: true });
    const colors = await Color.findAll({ raw: true });

    res.render('index', {
      bags,
      sizes,
      materials,
      colors,
    });
  }
}

module.exports = IndexController;
