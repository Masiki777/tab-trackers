const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('combine'))
app.use(cors())
const port = process.env.port || 4600
app.get('/',(req,res)=>{
    res.send('Hi')
})
app.listen(port, (err)=>{
    if(err) throw err
    console.log(`Server listen to port `);
})