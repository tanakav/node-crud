const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

const app = express();
const DATABASE_URL = "mongodb+srv://vtanaka:sa1234567890@cluster0.ii0kr.mongodb.net/projects?retryWrites=true&w=majority";
const options = {
    poolSize: 5, 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, options);
const db = mongoose.connection;
db.on("open", () =>{
    console.log("Database connected");
});

db.on("disconnected",() =>{
    console.log("Database disconnected");
});

db.on("error",() =>{
    console.log("Db Error");
});

app.use(express.json());
app.use(routes);

app.listen(3334, () => {
    console.log("server is running");
});