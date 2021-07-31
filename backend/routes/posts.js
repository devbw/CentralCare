const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');
const auth = require('../middlewares/auth');

router.post('/', auth, postController.createPost);

router.delete('/:id', auth, postController.deletePost);

router.put('/:id', auth, postController.report);

router.get('/:id', auth, postController.getOnePost);

router.get('/', auth, postController.getAllPost);


module.exports = router;