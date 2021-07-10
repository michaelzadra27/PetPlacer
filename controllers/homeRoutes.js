const router = require('express').Router()
const { User } = require('../models')

router.get('/', (req, res)=>{
    if(req.session.logged_in){
        res.render('dashboard')
    } else {
        console.log("hit")
        res.render('login-signup', {switch: req.session.switch})
    }
})

// router.get('/dashboard', (req, res)=>{
//     res.render('dashboard')
// })

module.exports = router;