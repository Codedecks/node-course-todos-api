const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a135bb598fff21e60c7a66b';

// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');;
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userId = '5a133f5413ce6d2a1065fa3e';

User.findById(userId).then((user) => {
  if(!user){
    return console.log('Id not found');
  }
  console.log('User Info', user);
}, (e) => {
  console.log(e);
});
