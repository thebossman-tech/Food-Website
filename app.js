const express = require ('express')
const path = require ('path')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/gallery', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'gallery.html'))
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})















app.listen('3000',(req,res)=>{
    console.log('server is running on port 3000')
})