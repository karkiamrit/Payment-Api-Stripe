const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const fs=require('fs');

const stripeSecretKey=process.env.STRIPE_SECRET_KEY;
const stripePublicKey=process.env.STRIPE_PUBLIC_KEY;

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/store', function(req,res){
    fs.readFile('items.json',function(error,data){
        if(error){
            res.status(500).end();
        }else{
            res.render('store.ejs',{
                items:JSON.parse(data)
            });
        }
    })
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});