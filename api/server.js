const express = require("express");
const path = require('path');
const connectDb = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
// connectDb();

app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => res.send("Hello raccoons!"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
