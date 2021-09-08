
const express = require("express");

const { addTest } = require("../utils/test");

const router = express.Router();

router.post("/addTest", async (req, res) => {

    try {
        await addTest(req, res);
        res.status(200).json({msg: `Test name ${req.body.name} has been created`});
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;