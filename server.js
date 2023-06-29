const express=require('express');
const app=express();
const dotenv=require('dotenv').config();

const stripeSecretKey=process.env.STRIPE_SECRET_KEY;
const stripePublicKey=process.env.STRIPE_PUBLIC_KEY;

app.set('view engine','ejs');
app.use(express.static('public'));
  

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});