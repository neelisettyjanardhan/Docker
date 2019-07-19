const express = require('express')
const app = express()
const port = 3000
const process = require('process');

app.get('/', (req, res) =>
    res.send('Hello wo!'))

app.get('/api', (req, res) => {
    console.log('========');
    res.send('===========')
})
console.log('updated');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
