const express = require('express')
const app = express()
app.listen(1110 , ()=> {
    console.log("Local Host 1111 Successfully Started")
})

app.get('/' , (req,res)=>{
        res.send("Welcome to Express")
})

app.get('/about', (req,res)=>{
    res.send("<h1>About page</h1>")
})

app.get('/about/user', (req,res)=>{
    res.send("User page")
})

app.get('/index',(req,res)=>{
    res.send("Index ")
})

//Parameters in Get 
//Passing same parameters creates error
//Define different parameters everytime 

app.get('/user/:userid', (req,res)=>{
    res.send(req.params)
})

app.get('/user/:userid/book/:book_Name/id/:Bookid',(req,res)=>{
    res.send(req.params.book_Name)
})

//Multiple Parameters in one Route

app.get('/users/:usersid-:bookid',(req,res)=>{
    res.send(req.params);
})

// Search and Query parameters

app.get('/search',(req,res)=>{
    res.send(req.query);
})

//Getting values by the id or the parameter enterd by the user on the url 

app.get('/seah',(req,res)=>{
    const namee= req.query.name
    const courcee=req.query.cource

    res.send(`The resuts from the search are Name:${namee} , cource: ${courcee}`)
})
