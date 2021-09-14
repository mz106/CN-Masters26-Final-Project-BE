
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const session = {session: false};


const router = express.Router();

const register = async (req, res, next) => {
    
    req.user.email ? res.status(200).json({msg: "You have successfully registered"}) : res.status(401).json({msg: "This user already exixts"});
};

const login = (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        try {
        if (err) {
            return res.status(500).json({msg: "Internal server error"})
        } else if (!user) {
            return res.status(401).json({msg: "User has not been found"})
        }
        const token = jwt.sign({user: {id: user.id, email: user.email}}, process.env.SECRET_KEY);
        const fn = (error) => error? next(error) : res.status(200).json({user, token});
        req.login(user, session, fn);
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
    
};

router.post("/register", passport.authenticate("register", session), register);
router.post("/login", login);

module.exports = router;