const express = require('express')
const Datastore = require('nedb')
const app = express()
const cors = require('cors')
const fs = require('fs');

app.use(cors())
app.use(express.json())
app.listen(9020)
app.use(express.static('public'));

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
const db = new Datastore({filename:'database.db',autoload: true});

app.post('/api',(req,res)=>{
    let data = req.body //Name:Kdkfsdklfjsdkfj CordsX: CordsY Services :['dfsdfsf']
    console.log(data)
    fs.readFile('public/Serve.txt', 'utf8', function(err, resp) {
        if (err) throw err;
        let d = resp.split("\n")
        let services = getRandom(d,4)
        data = {...data, services}

        db.insert(data,(err,newDat)=>{
            key = newDat._id
           
        })
    });

    res.json({name:'Bomaya'})

})

app.get('/api',(req,res)=>{
    db.find({}, function (err, docs) {
        console.log(docs);
        res.send(docs)
    });
})
app.get('/api/service',(req,res)=>{
    fs.readFile('public/Serve.txt', 'utf8', function(err, resp) {
        if (err) throw err;
        let d = resp.split("\n")
        res.send(d)
    })
})

app.post('/api/service',(req,res)=>{
    const inp = req.body.search;
    console.log(inp)
    db.find({ services: inp}, function (err, docs) {
        console.log(docs)
        res.send(docs)
    })})