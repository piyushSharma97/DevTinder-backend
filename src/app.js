const express = require("express");
const connectDB = require('./Config/db')
const dotenv = require("dotenv");
const {userAuth} =require('./middleware/auth')
const app = express();
dotenv.config({});
const PORT = process.env.PORT

app.use(express.json());



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
  })
connectDB().then(()=>{
    try{
        app.listen(process.env.PORT,()=>{
            console.log(`server is running on port ${PORT}`)
            })
    }catch (error) {
        console.log(error);
      }
}).catch((err)=>{
    console.log('err',err)
})

