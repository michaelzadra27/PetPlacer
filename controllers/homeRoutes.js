const router = require('express').Router()
const { User } = require('../models')

router.get('/', (req, res)=>{
    if(req.session.logged_in){
        res.render('dashboard')
    } else {
        res.render('login-signup', {switch: req.session.switch})
    }
})

module.exports = router;