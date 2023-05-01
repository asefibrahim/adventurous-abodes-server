const express = require('express')
const app = express()
const port = 4500;
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Server is running')
})

const places = require('./data.json')
const hotels = require('./hotel.json')

app.get('/places', (req, res) => {
    res.send(places)
})
app.get('/places/:id', (req, res) => {
    const id = req.params.id
    const existPlaceById = places.find(p => p.id == id)
    res.send(existPlaceById)

})

app.get('/hotel', (req, res) => {
    res.send(hotels)
})

app.get('/hotel/:id', (req, res) => {
    const id = req.params.id
    const ExistHotels = hotels.filter(hotel => hotel.id == id)
    res.send(ExistHotels)
})
app.listen(port)