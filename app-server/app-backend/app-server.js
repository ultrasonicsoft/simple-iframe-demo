const express = require('express')
var cors = require('cors')

const app = express()
const port = 8000

app.use(cors())

app.get('/', (req, res) => res.send('App server!'))
app.get('/finish', (req, res) => res.send('Finished!'))

app.post('/success', (req, res) => {
    console.log('app server post api hit');
    res.redirect('/finish');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))