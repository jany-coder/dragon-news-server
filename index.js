const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('News API Running')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`DRagon news runnng on port ${port}`)
})