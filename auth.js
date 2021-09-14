
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const JWTStrategy = require("passport-jwt").Strategy;

const User = require("./models/user");

const mappings = {usernameField: "email", passwordField: "password"};

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
    try {
        const user = await User.findOne({where: {email}});
        
        if (!user) {
            console.log("not user")
            return done(null, false, {msg: "This user was not found"})
            
        }

        const match = await bcrypt.compare(password, user.passwordHash);
        
        if (!match) {
            
            return done(null, false, {msg: "Your password has not matched"})
        }

        return done(null, {id: user.id, email: user.email});

    } catch (error) {
        console.log(error)
        done(error);
        
    }
};

const verify = (token, done) => {
    try {
        done(null, token.user);
    } catch(error) {
        done(error);
    }
};

const registerStrategy = new LocalStrategy(mappings, register);
const loginStrategy = new LocalStrategy(mappings, login);
const verifyStrategy = new JWTStrategy({
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token")
}, verify);

module.exports = {
    registerStrategy,
    loginStrategy, 
    verifyStrategy
};