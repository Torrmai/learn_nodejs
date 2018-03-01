var http = require('http');
var fs =  require('fs');
var server = http.createServer(function(req,res) {
  console.log('request was made'+req.url);
  res.writeHead(200,{'Content-type': 'application/json'});
  var myObj={
    name: 'Ryu',
    job:'Ninja',
    age:29
  };
  res.end(JSON.stringify(myObj))
  // var web = fs.createReadStream(__dirname+'/index.html','utf8')
  // web.pipe(res)

})
server.listen(8000, '127.0.0.1');
console.log('listen to port 8000')
