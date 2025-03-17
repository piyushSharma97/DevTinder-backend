const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({});
const PORT = process.env.PORT

app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware
  });
  app.use("/admin", (req, res, next) => {
    const token = "9q99";
    const isAuthorizedAdmin = token === "999";
    console.log('auth')
    if (!isAuthorizedAdmin) {
        res.status(401).send("Unauthorized Admin")
    } else {
        next();
    }
})
app.get("/admin/getAllData", (req, res) => {
    res.send("All data Generated")
})
app.get("/admin/deleteData", (req, res) => {
    res.send("Data Deleted")
})
app.listen(process.env.PORT,()=>{
console.log(`server is running on port ${PORT}`)
})