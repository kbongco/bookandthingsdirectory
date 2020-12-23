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

const booksAndThings = [
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

app.get('/booksandthings', (req, res) => {
  res.json(booksAndThings)
})

app.post('/booksandthings', (req, res) => {
  const booksandthing = req.body
  booksandthings.push(booksandthing)
  res.json(booksandthing)
})

app.get('/booksandthings/:id', (req, res) => {
  const id = req.params.id;
  const booksandthing = booksAndThings.filter(booksAndThing => booksAndThing.id === id)[0]
  res.json(booksandthing)
})

app.put('/booksandthings/:id', (req, res) => {
  const id = req.params.id 
  const thingsIndex = booksAndThings.findIndex(booksAndThing => booksAndThing.id === id)
  const things = {}
})
