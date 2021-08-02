module.exports = {
  create
};

function create(req, res) {
  // TODO:  Baby step
  res.json({
    user: {
      name: req.body.name,
      email: req.body.email
    }
  });
}