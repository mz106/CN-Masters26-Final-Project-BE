
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = {session: false};

const router = express.Router();

const profile = async (req, res, next) => {
    res.status(200).json({msg: "profile", user: req.user, token: req.query.secret_token});
};

const register = async (req, res, next) => {
    req.user.email ? res.status(201).json({msg: "You have successfully registered", email: req.user.email}) : res.status(401).json({msg: "This user already exixts"});
};

const login = (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        try {
        if (err) {
            return res.status(500).json({msg: "Internal server error", auth: false})
        } else if (!user) {
            return res.status(401).json({msg: "User has not been found", auth: false})
        }
        const token = jwt.sign({user: {id: user.id, email: user.email}}, process.env.SECRET_KEY);
        const fn = (error) => { 
            error? next(error) : res.status(200).json(
            {
                msg: "User authenticated", 
                email: user.email, 
                secret_token: token, 
                auth_status: true,
            }
        )};
        req.login(user, config, fn);
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
    
};

router.post("/register", passport.authenticate("register", config), register);
router.post("/login", login);
router.get("/profile", passport.authenticate("jwt", config), profile);
router.get("/cart", passport.authenticate("jwt", config), (req, res) => {
    res.status(200).json({msg: "cart hit"})
});
module.exports = router;