const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
require('./db/connection');
const path = require("path");
const hbs = require("hbs");
const Client = require("./models/client");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);

app.get('/', (req,res) => {
    res.render("index");
})

app.post('/', async (req, res) =>{
    try{
        const clientall = new Client({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })

        const registeredclient = await clientall.save();
        res.status(201).render("index");
    }
    catch(error){
        res.status(400).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})