// const MongoClient = require('mongodb').MongoClient;
// Deconstruct object  same as above
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todosApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database server.');
  }
  console.log('Connected to MongoDB server');

  // Update collection by ID
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a0f7ae0b62ad8f4d8512c54')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // Update collection by ID & increament
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5a0f70905cf0423ca8b0d639')
  // }, {
  //   $set: {
  //     name: 'Brandon Pham'
  //   },
  //   $inc: {
  //     age: 1
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a133b6f2ce63c1a54c7e68b')
  }, {
    $set: {
      text: 'Learn Node.js'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
