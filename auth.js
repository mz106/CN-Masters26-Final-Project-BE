
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");

//step one - 

const register = async (email, password, done) => {
    
    const saltRounds = 10;
    
    try {
        
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        const user = await User.build({email, passwordHash: hash});

        try {
            await user.save();
            return done(null, user);
        } catch (error) {
            console.log(user, error)
            return done(null, {});
        }
    } catch (error) {
        return done(error);
    }
};

const login = async (email, password, done) => {
    console.log("login auth hit")
    console.log(email, password)
    try {
        console.log("auth try block hit")
        const user = await User.findOne({where: {email}});
        console.log(user)
        if (!user) {
            console.log("not user")
            return done(null, false, {msg: "This user was not found"})
            
        }

        const match = await bcrypt.compare(password, user.passwordHash);
        console.log(match)
        if (!match) {
            console.log("not match")
            return done(null, false, {msg: "Your password has not matched"})
        }

        return done(null, user);

    } catch (error) {
        console.log(error)
        done(error);
        
    }
};

const registerStrategy = new LocalStrategy({usernameField: "email", passwordField: "password"}, register);
const loginStrategy = new LocalStrategy(login);

module.exports = {
    registerStrategy,
    loginStrategy
};