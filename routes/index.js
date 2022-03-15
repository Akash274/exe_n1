var express = require('express');
var router = express.Router();

//var mongodb = require('mongodb');
const {MongoClient} = require('mongodb');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


router.get('/mongodb', async function (request, response) {

  const client = await MongoClient.connect("mongodb+srv://amhatre2:akash08MHATRE!((^@cluster0.awm7r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('myFirstDatabase');
  const items = await db.collection('users').find({}).toArray();
  console.log(items);
  response.render('mongodb', { items: items });
  client.close();
});

