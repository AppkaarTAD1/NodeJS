var http = require('http');
const server = http.createServer(function (req,res){
    console.log(`url ${req.url} Is Called `);
res.end('Welcome Nima');
});
server.listen(1313);
console.log('Server Is Listening On Your Port');