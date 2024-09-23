const express = require("express");
const router = express.Router();
const { transactions } = require("../models")

router.get("/", async (req, res) => {
    const listOfTransactions = await transactions.findAll();
    res.json(listOfTransactions);
});

router.post("/", async (req, res) => {
    const transaction = req.body;
    await transactions.create(transaction);
    res.json(transaction);
})


module.exports = router;