var env = process.env.NODE_ENV || 'development';
// console.log('enc ***', env);
if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/todosApp';
}else if (env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/todosAppTest';
}
