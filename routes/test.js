
const express = require("express");

const { addTest } = require("../utils/test");

const router = express.Router();

router.post("/addTest", async (req, res) => {
    await addTest(req, res);
    res.status(200).json({msg: `Test name ${req.body.name} has been created`});
    res.status(200).send("add test is working now");
});

module.exports = router;