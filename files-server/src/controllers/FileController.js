class FileController {
  async store(req, res) {
    const file = {
      title: req.file.originalname,
      path: req.file.key
    };


    return res.json(file);
  }
}

module.exports = new FileController();