const uploadFile = require('../../config/upload-file');
const Photo = require('../../models/photo');

module.exports = {
  index,
  upload
};

async function index(req, res) {
  const photos = await Photo.find({}).sort('-createdAt').exec();
  res.json(photos);
}

async function upload(req, res) {
  try {
    if (req.file) {
      // TODO: Remove the console.log after you've verified the output
      console.log(req.file);
      // The uploadFile function will return the uploaded file's S3 endpoint
      const photoURL = await uploadFile(req.file);
      const photoDoc = await Photo.create({
        url: photoURL,
        // As usual, other inputs sent with the file are available on req.body
        title: req.body.title
      });
      res.json(photoDoc);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}
