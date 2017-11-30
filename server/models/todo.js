var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  compltedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

// Todos Add
  // var newTodo = new Todo({
  //   text: 'Lern Node.js',
  //   completed: false,
  //   compltedAt: 123
  // });

  // var newTodo = new Todo({
  //   text: 'Cook dinner'
  // })

  // newTodo.save().then((doc) => {
  //   console.log('Saved todo', doc);
  // }, (e) => {
  //   console.log('Unable to save todo', e);
  // });


module.exports = {Todo};
