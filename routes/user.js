
const express = require("express");
const passport = require("passport");
const session = {session: false};

const router = express.Router();

router.get("/login", (req, res) => {
    res.status(200).send("/user/login working");
});


const register = async (res, req, next) => {
    
    req.user.name ? res.status(200).json({msg: "You have successfully registered"}) : res.status(401).json({msg: "This user already exixts"});
};

router.post("/register", passport.authenticate("register", session), register);

module.exports = router;