require("dotenv").config();
const express = require("express");
const app = express();
const carsRouter = require("./api/carsRouter");
const port = process.env.PORT;

app.use(express.json());
app.use("/api/cars", carsRouter);

app.listen(port, () => console.log(`\n Listening on port ${port} \n`));
