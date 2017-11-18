// const MongoClient = require('mongodb').MongoClient;
// Deconstruct object  same as above
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Brandon', age: 31}
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/todosApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to database server.');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({_id: new ObjectID('5a0f74aab62ad8f4d8512b7e')}).toArray().then((docs) => {
  // db.collection('Todos').find().count().then((count) => {
  db.collection('Users').find({name: 'Kasi Pham'}).toArray().then((docs) => {
    console.log('User');
    console.log(JSON.stringify(docs, undefined, 2));
    // console.log(`Todos count: ${count}`);
  }, (err) => {
    if(err){
      console.log('Unable to fetch todas', err);
    }
  });

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //       return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   // _id: 123,
  //   name: 'Kaitlin Pham',
  //   age: 31,
  //   location: 'California'
  // }, (err, result) => {
  //   if(err){
  //       return console.log('Unable to insert user', err);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
