const router = require('express').Router()
const { User } = require('../models')

router.get('/', (req, res)=>{
    if(req.session.logged_in){
        res.render('Dashboard')
    } else {
        res.render('Dashboard', {switch: req.session.switch})
    }
})

module.exports = router;