const router = require('express').Router()
const { User } = require('../models')

router.get('/', (req, res)=>{
    console.log(req.session)
    if(req.session.logged_in){
        res.render('dashboard')
    } else {
        res.render('login-signup')
    }
})

// router.get('/dashboard', (req, res)=>{
//     res.render('dashboard')
// })

module.exports = router;