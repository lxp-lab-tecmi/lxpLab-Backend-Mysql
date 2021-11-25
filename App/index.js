require("dotenv").config();
const cors = require("cors");
const express = require("express");
const query = require('../Util/connection/conecctionDB')
const api = require("./Routes/api");

const app = express();


app.use(cors());



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.use("/", api);
app.get("/", (_, res) => res.send("CIMA 2025 🏔 - XLP LAb - MySQL"));

app.listen(process.env.PORT || 3000, () =>
    console.log(`Example app listening on port ${process.env.PORT}!\n http://localhost:${process.env.PORT || 3000}`)
);
