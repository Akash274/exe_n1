var express = require('express');
var router = express.Router();

//var mongodb = require('mongodb');
const {MongoClient} = require('mongodb');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//**************************************************************************

//***** mongodb get all of the Routes in Routes collection where frequence>=1

//      and sort by the name of the route.  Render information in the views/pages/mongodb.ejs

router.get('/mongodb', async function (request, response) {
//
//   var uri = "mongodb+srv://amhatre2:akash08MHATRE!((^@cluster0.awm7r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//
//   const client = new MongoClient(uri);
//   await client.connect(function(err, client) {
//
//     // mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, db) {  // works with mongodb v2 but not v3
//   console.log("error:",err)
//     if(err) throw err;
//
//     //get collection of routes
//
//     var db = client.db('heroku_pmk6n54s');  // in v3 we need to get the db from the client
//
//     var Routes = db.collection('Routes');
//
//     //get all Routes with frequency >=1
//
//     Routes.find({ frequency : { $gte: 0 } }).sort({ name: 1 }).toArray(function (err, docs) {
//
//       if(err) throw err;
//
//
//
//       response.render('mongodb', {results: docs});
//
//
//
//     });
//
//
//
//     //close connection when your app is terminating.
//
//     // db.close(function (err) {
//
//     client.close(function (err) {
//
//       if(err) throw err;
//
//     });
//
//   });//end of connect
//
// });//end app.get

  const client = await MongoClient.connect("mongodb+srv://amhatre2:akash08MHATRE!((^@cluster0.awm7r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
// specify the DB's name
  const db = client.db('myFirstDatabase');
// execute find query
  const items = await db.collection('users').find({}).toArray();
  console.log(items);
  response.render('mongodb', { items: items });
// close connection
  client.close();


});

