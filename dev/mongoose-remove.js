const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5a146d8ada54cd7aaef42724'}).then((doc) => {
  console.log();
});

Todo.findByIdAndRemove('5a146d8ada54cd7aaef42724').then((todo) => {
  console.log(todo);
});
