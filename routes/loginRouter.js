const express = require('express');

const router = express.Router();
const { User } = require('../db/models');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'Login' });
});

router.post('/', (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ where: { email } });
  if (email === user.email && password === user.password) {
    req.session.user = { id: user.id, name: user.name };
    res.redirect('/');
  }
});

module.exports = router;
