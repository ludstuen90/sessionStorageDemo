var express = require('express');

var app = express();
var path = require('path');

app.get('/', function(req, res){
  console.log('hit here');
  res.sendFile(path.resolve('./views/index.html'));
});

app.use(express.static( 'public' ));

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on server 3000');
});
