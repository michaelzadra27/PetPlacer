const router = require('express').Router()
const { User } = require('../models')

router.get('/', (req, res)=>{
    res.render('login-signup')
})

module.exports = router;