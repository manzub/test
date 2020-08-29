const express = require("express");
const app = express();
const lowdb = require("lowdb")
const fileSync = require('lowdb/adapters/FileSync');
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = lowdb(adapter);
db.defaults({users:[], book:{}}).write()

app.get("/newUser", (req, res)=>{
    db.get('users')
        .push({id:1,name:'Wisdom Okon'})
        .write()
    res.redirect("/allusers")
})
app.get("/newBook", function(req, res){
    db.set('book.title', 'HTML For Beginners')
        .write()
})

app.get("/allUsers", (req, res)=>{
    var users = db.get('users')
        .find({id:1})
        .value()
    res.send(users); 
})

app.listen(5000);