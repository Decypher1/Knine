const User = require('./models/authModel');
const passportLocal = require('passport-local').Strategy;
const passport = require('passport');
const express = require('express');
const app = express();
const router = require('./routes/userRoute')
const session = require('express-session')


app.use(session ({
    secret: 'fhlskhflshgks',
    resave: 'false',
    saveUninitialized : 'false'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new passportLocal(User.authenticate()));

// app.get('/', (req, res) => {
//     res.json({success: true, message: 'Welcome to Knine'});
// })

app.use('/', router)

app.use('/login', router);
app.use('/register', router);
module.exports = app;
