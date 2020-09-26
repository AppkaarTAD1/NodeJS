const express = require('express');
const Application = express();
Application.get('/', (req,res) =>
{
    res.send('Hello User');

});
Application.listen(1313);
console.log('Server Is Running On Port 1313');