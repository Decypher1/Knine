const authSchema = require('./src/models/authModel');
const bcrypt = require('bcrypt');
const passport = require('passport')
const passportLocal = require('passport-local').Strategy

const signUp = async (req, res) => {
    const { email, name, username, password } = req.body;
    
    if(!email || !name || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    
    const existingUser = await authSchema.findOne({ email });
    if(existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await newUser.save();
    res.status(200).json(newUser);
}

const login = (req, res) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res);

    
}