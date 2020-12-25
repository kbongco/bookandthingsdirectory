const express = require('express')
//this imports express
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

const books = [
  {
    "id": 01,
    "title": "Your Name",
    "imgURL": "null",
    "content": "Oh my name's Mitsuha who the fuck are you?! I don't know you! - Tod Andew Logio 03/2018",
    "author": "Makoto Shinkai",
    "Rating": "Lots of crying emojis"
  }, {
    "id": 02,
    "title": "Overwatch",
    "imgURL": "null",
    "content": "Toxic",
    "Author": "Blizzard",
    "Rating":"Lots of Salt"
  }, {
    "id": 03,
    "title": "Cracking the Coding Interview",
    "imgURL": "null",
    "content": "Data Structures Galore!",
    "Author": "What's her name again?",
    "Rating":"This book has made me cry"

  }
]

app.get('/', (req, res) => {
  res.send('You are home!')
})

app.get('/books', (req, res) => {
  res.json(books)
})

app.post('/books', (req, res) => {
  const book = req.body
  books.push(book)
  res.json(book)
})

app.get('/books/:id', (req, res) => {
  const id = req.params.id
  const book = books.filter(book => book.id === id)[0]
  res.json(book)
})

app.put('/books/:id', (req, res) => {
  const id = req.params.id
  const bookIndex = books.findIndex(book => book._id === id)
  const book = { ...books[bookIndex], ...req.body }
  books.splice(bookIndex, 1, book)
  res.json(book)
})

app.delete('/books/:id', async (req, res) => {
  const id = req.params.id
  const bookIndex = books.findIndex(book => book._id === id)
  books.splice(bookIndex, 1)
  res.json(books)
})