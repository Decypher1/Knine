const User = require('./models/user');
const passportLocal = require('passport-local').Strategy;
const passport = require('passport');


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new passportLocal(User.authenticate()));

