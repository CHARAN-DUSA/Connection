const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require('./routes/users')

const PORT = 3000;

//body parser
app.use(express.json());
//connect to database
connectDB();

app.use('/api',users)

app.get('/',(req,res) => {
    console.log("Iam inside home page route handler");
    res.send("Hello Welcome to Rajanna Sircilla")
})


app.listen(PORT,() => {
    console.log("Server is running")
})