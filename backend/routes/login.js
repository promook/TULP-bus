const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

const router = express.Router();
router.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    try {
        console.log("login");
        // User.findOne({ username: username }, (err, doc) => {
        //     console.log(`${doc} data in Mongo`);
            
        //     if (err) {} else {
        //         if (!doc) {
        //             const token = null;
        //             res.status(200).json({ token });
        //         }
        //         else {
        //             bcrypt.compare(password, doc.password, function(error, response) {
                         const token = jwt.sign({ username }, "top_secret");
                         res.status(200).json({ token });
        //             });
        //         } 
        //     }
        // });
    } catch (error) { }
    
    // passport.authenticate("login", async(err, user, info) => {
    //     try {
    //         if (err || !user) {
    //             const error = new Error("No User Found");
    //             console.log("Yellow", err);
    //             return next(error);
    //         }
    //         req.login(user, { session: false }, async(error) => {
    //             if (error) return next(error);
    //             const body = {
    //                 _id: user._id,
    //                 name: user.name,
    //                 email: user.email,
    //                 gender: user.gender,
    //             };
    //             const token = jwt.sign({ user: body }, "top_secret");
    //             return res.json({ token });
    //         });
    //     } catch (error) {
    //         return next(error);
    //     }
    // })(req, res, next);
});

// router.get('/Login', (req, res) => {
//     res.send("Login Here")
// })

module.exports = router;