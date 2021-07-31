const postModel = require('../models/posts');
const jwt_decode = require('jwt-decode');
const utils = require('../services/utils');
const isLength = require('validator/lib/isLength');

exports.createPost = (req, res, next) => {

  const post_content = utils.strip_tags(req.body.post_content).trim();
  if ( !isLength(post_content, { min: 10, max: 2000 }) ) {
      return res.status(400).send("La longueur du commentaire n'est pas acceptée");
  }
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const userId = decoded.userId;

  postModel.create(userId, req.body.search, req.body.price, req.body.city, req.body.job, post_content)
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    console.error(err);
  })
};

exports.report = (req, res, next) => {
  postModel.report(req.params.id)
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
}

exports.getOnePost = (req, res, next) => {

  postModel.getOne(req.params.id)
  .then((rows) => {
      res.send(rows);
  })
  .catch(() => {
      res.status(500).send();
  })
};

exports.getAllPost = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const userId = decoded.userId;

  postModel.getAll(userId)
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
};

exports.deletePost = (req, res, next) => {

  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const userId = decoded.userId;

  postModel.deleteOne(req.params.id, userId, userId)
  .then(() => {
      res.send("Post supprimé");
  })
  .catch((err) => {
      res.status(500).send(err);
  })

};