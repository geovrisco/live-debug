// const Book = require('../models').Book;
const { Book } = require('../models');

class BookController {
  
  static createBook(req, res, next) {
    // const { isbn, title, author, category, stock } = req.body;
    // console.log(asdasd)
    // console.log(isbn,title,author,category,stock, 'masuk')
    
    Book.create({
      isbn:req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      stock:req.body.stock
    })
    .then(data=>{
      console.log(data)
      let book = {
        id: Number(data.id),
        isbn: data.isbn,
        title: data.title,
        author: data.author,
        category: data.category,
        stock:data.stock
      }
      // console.log(book.id,'======================================================')
      res.send(201).json(book)
    })
    .catch(err=>{
      // console.log(err)
      if(err){
        console.log(err.errors,'ini error')
        next(err.errors)
      }
      next(err)
    })
  }
}

module.exports = BookController;
