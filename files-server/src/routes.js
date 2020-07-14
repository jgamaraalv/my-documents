const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const FileController = require("./controllers/FileController");

routes.get('/', (req, res) => {
  return res.send('Server is running!')
});

routes.post(
  "/files",
  multer(multerConfig).single("file"),
  FileController.store
);

module.exports = routes;