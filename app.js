const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Blog =require('./models/blogs.js')

const app = express();





app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://ghada:ghada2001@cluster0.jlrkvlf.mongodb.net/blogs', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(()=>{
     console.log("bien connecte")
   })
   .catch((err)=> {
     console.log(err)
   })


app.post('/enregistrer-donnees',(req,res)=> {
    const blog = new Blog(req.body);
    blog.save();
  });

app.listen(3000, ()=>{
  console.log('Serveur en cours d exécution');
});

