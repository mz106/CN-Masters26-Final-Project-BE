
const req = require("express/lib/request");
const Test = require("../models/test");

const addTest = async (req, res) => {
    try {
        const newTest = await Test.build({
            name: req.body.name
        });

        await newTest.save();

    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    addTest
};