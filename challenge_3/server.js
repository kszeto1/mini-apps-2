const express = require('express')
const bodyParser = require('body-parser');
var path = require('path')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))