const express = require('express');
const path = require('path');
const App = express();
App.use(express.static(__dirname + 'html'));
App.get('/Nima',(req,res) =>
{
   res.sendFile(path.resolve(__dirname , 'html/webpage.html'));
});
App.listen(1111);
console.log('Port is running');
