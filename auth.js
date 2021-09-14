
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");

//step one - 

const register = async (name, email, password, passwordCheck, done) => {
    
    const saltRounds = 10;
    
    try {
        if (!name || !email || !password || !passwordCheck) {
            throw new Error("All fields are required");
        } else if (password !== passwordCheck) {
            throw new Error("Your passwords do not match");
        } 

        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        const user = await User.build({name: name, email: email, passwordHash: hash});

        try {
            await user.save();
            console.log(null, user);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
};

const registerStrategy = new LocalStrategy({usernameField: "name", passwordField: "password"}, register);

module.exports = {
    registerStrategy
};