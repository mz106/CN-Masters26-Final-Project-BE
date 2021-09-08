
const express = require("express");

const { addTest } = require("../utils/test");

const router = express.Router();

router.get("/", async (req, res) => {
    res.status(200).send("get test route works");
});

router.post("/", async (req, res) => {

    try {
        await addTest(req, res);
        res.status(201).json({msg: `Test name ${req.body.name} has been created`});
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;