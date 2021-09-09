
const bcrypt = require("bcrypt");

const User = require("./models/user");

//step one - 

const register = async (name, email, password, done) => {
    console.log("hello world")
    const saltRounds = 10;
    console.log(saltRounds)
    try {
        if (!name || !email || !password) {
            throw new Error("All fields are required");
        }

        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        const user = await User.build({name: name, email: email, passwordHash: hash});

        console.log(salt, hash, user)
    } catch (error) {
        done (error)
    }
};

register()

module.exports = {
    register
};