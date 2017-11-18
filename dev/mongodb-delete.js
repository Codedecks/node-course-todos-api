// const MongoClient = require('mongodb').MongoClient;
// Deconstruct object  same as above
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todosApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to database server.');
  }
  console.log('Connected to MongoDB server');

  // Delete many
  // db.collection('Todos').deleteMany({name: 'Take out garbage'}).then((result) => {
  //   console.log(result);
  // });

  // Delete one
  // db.collection('Todos').deleteOne({text: 'Call mom'}).then((result) => {
  //   console.log(result);
  // });

  // FindOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });


  // db.collection('Users').deleteMany({name: 'Brandon Pham'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5a0f6f390a02ff17600ecbd1")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });



  // db.close();
});
