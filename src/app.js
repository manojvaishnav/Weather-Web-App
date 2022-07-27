const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const path = require('path');
const app = express();

const staticPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.listen(port,()=>{
    console.log(`server started at port number ${port}`);
})