const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () => console.log(`App is live on port ${port}!`));