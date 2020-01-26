const express = require('express')
var cors = require('cors')
const axios = require('axios')


const app = express()
const port = 9000

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/success', (req, res) => res.send('Successful!'))

app.post('/', (req, res) => {
    console.log('post api hit');

    axios.post('http://localhost:8000/success/', {
        paymentData: 'payment successful'
    })
        .then((res) => {
            console.log(`statusCode: ${res.statusText}`);
            // console.log(res)
        })
        .catch((error) => {

            console.error(error)
        });
    res.send(200);            
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))