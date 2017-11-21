var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todosApp', { useMongoClient: true });
mongoose.connect('mongodb://codedecks:Temp4me!!@ds147070.mlab.com:47070/mytasklist_dev', { useMongoClient: true });

module.exports = {mongoose};
