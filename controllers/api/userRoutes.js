const router = require('express').Router()
const e = require('express')
const session = require('express-session')
const { User } = require('../../models')

router.post('/signup', async (req, res) => {
    try{
        const newUser = await User.create({
            email: req.body.newEmail,
            user_name: req.body.newUserName,
            password: req.body.newPassword
        })

        req.session.switch = !req.session.switch
        res.status(200).json(newUser)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    console.log("in try")
    console.log(req.body.email)
    console.log(req.body.password)
    try{
        
        const userData = await User.findOne({ where: {email: req.body.email} })
        console.log(userData)
        if (!userData) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        //replace with encryption later
        if(!req.body.password === userData.password){
            res.status(400).json({ message: "incorrect email or password"})
        }
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.user_email = req.body.email

        res.json({user: userData, message: 'Log in successful'})
        });

    } catch(err){
        res.status(500).json(err)
        console.log("in catch")
    }

})

router.post('/logout', (req, res)=>{
    if(req.session){
        req.session.destroy()
        res.status(204).end()
    }
    res.status(404).end()
})

router.post('/switch', (req, res)=>{
    if(req.session.switch){
        req.session.switch = false;
        res.render('login-signup', {switch: req.session.switch})
    }
    else if(!req.session.switch){
        req.session.switch = true;
        res.render('login-signup', {switch: req.session.switch})
    }
    res.status(204)

})

router.get('/search/:email', async (req, res)=>{

    const email = req.params.email
    try{
        const userData = await User.findByPk(email)
        if(!userData){
            res.status(404).json({ message: 'No user found with that email'})
        }
        const data = JSON.stringify(userData.dataValues)
        return res.json(userData.dataValues)
    } catch(err){
        res.status(500).json(err)
    }
})

router.put('/link_account', async (req, res)=>{

    try {
        const userData = await User.findByPk(req.session.user_email)
        if(!userData){
            res.status(404).message({ message: 'No user with that email' })
            return
        }

        const secondUserData = await User.findByPk(req.body.email)

        if(!secondUserData){
            res.status(404).message({ message: 'Link failed, email not found' })
            return
        }
        
        const updatedData = await userData.update({linked_account: req.body.email})
        res.status(200).json(updatedData)

    } catch(err){
        res.status(500).json(err)
    }

})



module.exports = router;


// const updatedData = await userData.update({linked_account: req.body.linked_account})
// res.status(200).json(updatedData)