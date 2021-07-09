const router = require('express').Router()
const { User } = require('../../models')

router.post('/signup', async (req, res) => {
    console.log(req.body)
    try{
        const newUser = await User.create({
            email: req.body.newEmail,
            user_name: req.body.newUserName,
            password: req.body.newPassword
        })
        res.status(200).json(newUser)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    console.log(req.body)
    try{
        const userData = await User.findOne({ where: {email: req.body.email} })
        
        if (!userData) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        console.log(userData)
    }catch(err){
        res.status(500).json(err)
    }

})



module.exports = router;