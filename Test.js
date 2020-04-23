const express = require('express')
const Datastore = require('nedb')

const db = new Datastore({filename:'database.db',autoload: true});
db.find({ services:"family" }, function (err, docs) {
    console.log(docs)
  });