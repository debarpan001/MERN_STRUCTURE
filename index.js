const express = require ("express");

const connectDB= require('./configs/db');

const productRoute=require("./routes/product.route")
const app = express();
connectDB();


app.get('/check',(req,res)=>{

    res.status(200).send('API is running')
});

app.use('/api/product',productRoute)

app.listen (5000, () => {
    console.log ("Server is  on ");
});

// Address of server : local host else 127.0.0.1

