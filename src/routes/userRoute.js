const express = require('express')
const router = express.Router()
const User = require('../models/authModel')
const passport = require('passport')

//register a user

router.post('register', (req, res) => {
    User.register(new User({email : req.body.email, username: req.body.username }),
    req.body.password, (err, user) => {
        if(err) {
            res.json({success: false, message: "Failure to create account " + err})
        }
        else {
            req.login(user, (err) => {
                if(err) {
                    res.json({success: false, message: err})
                }
                else {
                    res.json({success: true, message: 'Account created sucessfully'})
                }
            })
        }
    })
}) 

router.post('login', (req, res) => {
    if (!req.body.username) {
        res.json({success: false, message: 'Username was not given'})
    }
    else if(!req.body.password) {
        res.json({success: false, message: 'password was not given'})
    }
    else {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                res.json({success: false, message: err})
            }
            else {
                if (user) {
                    req.login(user, (err) => {
                        if (err) {
                            res.json({success: false, message: err})
                        }
                        else {
                            res.json({success: true, message: 'Logged in successfully'})
                        }
                    })
                }
                else {
                    res.json({success: false, message: info.message})
                }
            }
        })
    }
})

router.get('/', (req, res) => {
    res.json({message: 'This is the home page'})
})
module.exports =  router;