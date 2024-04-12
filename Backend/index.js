const exp = require('express');

const app = exp();
const port = 3050;

const mongoose = require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(exp.static('static'))

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/portfolio_updated',{useNewUrlParser: true, useUnifiedTopology: true,serverSelectionTimeoutMS: 30000}).then(function(){
    console.log("Connected to mongodb")
}).catch(function(){
    console.log("Not Connected")
})

const schema = mongoose.Schema({
    name:String,
})

const mod = mongoose.model('portfolio',schema);

// const ram = new mod({"name":"Rishabh"});

// ram.save().then(()=>{
//     console.log("saved")
// }).catch((err)=>{
//     console.log("err occur")
// })




app.get('/second',async (req,res)=>{
    const data = await mod.find({});

    res.send(data);
})

app.listen(port,()=>{
    console.log("Server run at 8080");
})
