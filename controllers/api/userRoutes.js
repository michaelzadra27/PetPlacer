const router = require('express').Router()
const session = require('express-session')
const { User } = require('../../models')

router.post('/signup', async (req, res) => {
  console.log(req.body)
  try {
    const newUser = await User.create({
      email: req.body.newEmail,
      user_name: req.body.newUserName,
      password: req.body.newPassword
    })


    res.status(200).json(newUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/login', async (req, res) => {
  console.log(req.body)
  try {
    const userData = await User.findOne({ where: { email: req.body.email } })

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    //replace with encryption later
    if (!req.body.password === userData.password) {
      res.status(400).json({ message: "incorrect email or password" })
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'Log in successful' })
    });

  } catch (err) {
    res.status(500).json(err)
  }
  console.log(userData)

  } catch (err) {
    res.status(500).json(err)
  }

  router.post('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy()
      res.status(204).end()
    }
    res.status(404).end()
  })



  module.exports = router;