// const express = require('express');
const express = require('express');
const router = express.Router();

const BookController = require('../controllers/book');

router.post('/books', BookController.createBook);


module.exports = router;
