// JWT JSON WEB TOKEN

const {SHA256} = require('crypto-js');

var message = 'I am user 1';
var hash = SHA256(message).toString();

console.log(message);
console.log(hash);

var data = {
  id: 4
};

var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'saltedfool').toString()
};

// Hacker =================
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// Hacker =================

var resultHash = SHA256(JSON.stringify(token.data) + 'saltedfool').toString();

if (resultHash === token.hash){
  console.log('Data was not changed');
}
else {
  console.log('Data was changed. Dont trust it!!!');
}
