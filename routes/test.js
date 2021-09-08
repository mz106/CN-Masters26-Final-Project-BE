const express = require("express");

const { addTest, listTest } = require("../utils/test");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await listTest());
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.post("/", async (req, res) => {
  try {
    await addTest(req.body.name);
    res
      .status(201)
      .json({ msg: `Test name ${req.body.name} has been created` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
