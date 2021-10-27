class IndexController {
  static async render(req, res) {
    res.render('index', { title: 'Express' });
  }
}

module.exports = IndexController;
