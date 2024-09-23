const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = require("./models");

//Routers
const transactionRouter = require("./routes/transactions");
app.use("/transactions", transactionRouter)

db.sequelize.sync().then(() => {
    app.listen(5001, () => {
        console.log("Server run`ning on port 5001");
    });
});
