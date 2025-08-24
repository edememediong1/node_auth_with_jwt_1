const User = require('../models/User');

const handleErrors = (err) => {
    console.log(err.message, err.code)
}


module.exports.signup_get = (req, res) => {
    res.render('signup')
}

module.exports.login_get = (req, res) => {
    res.render('login')
}

module.exports.signup_post = async (req, res) => {
    let body = req.body;
    const {email, password} = body
    
    try {
        const user = await User.create({email, password});
        res.status(201).json(user)
    } catch (err) {
        handleErrors(err);
        res.status(400).send('error user not created')
    }
}

module.exports.login_post = (req, res) => {
    let body = req.body;
    const {username, email} = body
    console.log(username, email)

    res.send('user login');
}