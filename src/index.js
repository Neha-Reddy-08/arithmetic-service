require('dotenv').config();
const express = require('express');
const cors=require('cors');
const {addnum} = require("./arithmetica");
const app = express();
const port = process.env.PORT;

 // Serve static files from the 'public' directory
 //
 
app.use(cors());
app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello world!');
});

app.listen(port);

app.get('/addnum/:n/:m',(req,res)=> {
    res.json(Number(req.params.n) + Number(req.params.m));
});

//push
