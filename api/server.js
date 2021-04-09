const express = require("express");
const connectDb = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDb();

app.get("/", (req, res) => res.send("Hello raccoons!"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
