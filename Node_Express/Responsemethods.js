const express = require('express')
const app = express()

app.listen(3000 , ()=>{
    console.log("Server started sucessfully ")
})

//Ejs is used to render or open any ejs file like html file from the ejs this command is used to create the ejsand to call it 
app.set('view engine', 'ejs')

app.get('/call', (req,res)=>{
    res.render('call') //any name can be given inside the view folder but extension should be "ejs" only 
})

//Json format 
app.get('/' , (req,res) =>{
    res.json({
        name: "surendra",
        age : 12
    })
})

//converting array object into the json format 
app.get('/users' , (req,res) =>{
    const users = [
        {
            name:"Surendra",
            Cource: "CSE",
            enroll:73
        },
        {
            name : "Hiral",
            cource:"CSE",
            enroll:5
        }
    ]
    res.json(users)
})

//redirecting to another pages 

app.get('/about' ,(req,res)=>{
    res.redirect('/users');
})

//To redirect to any particular website from the url provided 
app.get('/goo' , (req,res)=>{
    res.redirect('https://www.gogle.com')
})

//to redirect to the previous tab or url visited 

app.get('/next' , (req,res)=>{
    res.redirect('..')
})

//to make the user download any file while going on the route 
app.get('/download', (req,res)=>{
    res.download('./Files/IMG_20241127_174443.jpg')
})