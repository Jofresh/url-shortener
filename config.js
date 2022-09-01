// run once
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/urlshortener"; // mydatabase is the name of db
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
