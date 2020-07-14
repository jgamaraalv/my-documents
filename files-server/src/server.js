const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const server = require("http").Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "files")));

app.use(require("./routes"));

server.listen(process.env.PORT || 3333);