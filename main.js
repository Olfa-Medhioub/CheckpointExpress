const express = require('express')
const app = express()
const port = 5000

const middleware=(req,res,next)=>{
    var a = new Date()
    var Day = a.getDay()
    var Hour = a.getHours()
    // console.log('Day')
    if(Day==6 || Day==0 || Hour>17 || Hour<9){
        return (res.sendFile(__dirname+ '/Public/Error.html'))
    }
    next()
}

app.use(middleware)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Public/Home.html')
})

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/Public/style.css')
})

app.get('/1.PNG',(req,res)=>{
    res.sendFile(__dirname+'/Public/1.PNG')
})

app.get('/2.PNG',(req,res)=>{
    res.sendFile(__dirname+'/Public/2.PNG')
})


app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/Public/Contact.html')
})

app.get('/service',(req,res)=>{
    res.sendFile(__dirname+'/Public/Service.html')
})



app.listen(port,console.log(`serveur is running on the port ${port}`))

