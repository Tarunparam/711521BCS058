import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app=express();
app.use(bodyParser.json())

const port =4000;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjE3MTk3LCJpYXQiOjE3MTIyMTY4OTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE1NDkzYmJkLWI4NDctNDMwZC1hMDgxLTQ1NGIzY2Y4ZGIyZSIsInN1YiI6ImtpdC4yNS4yMWJjczA1OEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjE1NDkzYmJkLWI4NDctNDMwZC1hMDgxLTQ1NGIzY2Y4ZGIyZSIsImNsaWVudFNlY3JldCI6ImZZcHV5ZERRUlVDZFBxZUciLCJvd25lck5hbWUiOiJUYXJ1biBQIiwib3duZXJFbWFpbCI6ImtpdC4yNS4yMWJjczA1OEBnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTE1MjFCQ1MwNTgifQ.3w69Rr4g331ACXedir0N4H-f6bQxI5d1SfiNEBQ8fL8";
app.get("/",(req,res)=>{
    res.send("hellooo");
})
app.get("/tarundata",(req,res)=>{
    axios
    .get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then((response)=>{
        const x=response.data;
        res.json(x);
    })
    
})

app.listen(port,()=>{
    console.log(`running in port ${port}`);
})
