const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('News API Runnings');
});

app.get('/news-catagories', (req, res) =>{
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Dragon News server runing on port: ${port}`);
})