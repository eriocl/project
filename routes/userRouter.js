const router = require('express').Router();

const { Sequelize } = require('sequelize');
const db = require('../db/models');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

const bcrypt = require('bcrypt');
const saltRounds = 10;

router
  .route('/registration')
  .get((req, res) => {
    res.render('registration');
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    if (name && email && password) {
      try {
        console.log(name, email, password);
        const newUser = await db.User.create({ name, email, password: hash });
        if (newUser) {
          req.session.userName = newUser.name;
          req.session.userId = newUser._id;
          req.session.userAdmin = newUser.isAdmin;
          // res.redirect("/lk");
          res.redirect('/');
        }
      } catch (error) {
        res.sendStatus(401);
      }
    }
  });

router
  .route('/login')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    // const { email, password } = req.body;
    try {
      const { email, password } = req.body;
      const user = await db.User.findOne({
        raw: true,
        where: { email: email }
      });

      userId = user.id;
      userName = user.name;

      res.render('index', { userId, userName });

      // const findUser = await User.findOne({ email });
      // const comparePassword = await bcrypt.compare(password, findUser.password);
      // if (findUser && comparePassword) {
      //   req.session.userName = findUser.name;
      //   req.session.userId = findUser._id;
      //   req.session.userAdmin = findUser.isAdmin;
      //   res.redirect('/lk');
      // }
    } catch (error) {
      res.sendStatus(500);
    }
  });

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    console.log('Good Bye');
  });
  res.redirect('/user/login');
});

router
  .route('/session')
  .get((req, res) => {
    if (req.session.views) {
      req.session.views++;
      res.setHeader('Content-Type', 'text/html');
      res.write('<p>views: ' + req.session.views + '</p>');
      res.end();
    } else {
      req.session.views = 1;
      res.end('Welcome to the file session demo. Refresh page!');
    }
  });

module.exports = router;
