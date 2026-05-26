const express = require('express')
const app = express()

app.listen(3000, ()=> {
        console.log("Connected on the port 3000")
    })
        

    app.get('/',(req , res) => {
        res.send("<h1>Hello Surendra Pratap</h1>")
    })

    app.get('/about', (req ,res) => {
        res.send("about page ")
    })