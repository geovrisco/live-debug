// const Book = require('../models').Book;
const { Book } = require('../models');

class BookController {
  
  create(req, res, next) {
    const { isbn, title, author, category, stock } = req.body;
    console.log(isbn,title,author,category,stock, 'masuk')
    Book.create({ isbn, title, author, category, stock })
      .then(function(newBook) {
        res.status(201).json(newBook);
      })
      .catch(next);
  }
}

module.exports = BookController;
