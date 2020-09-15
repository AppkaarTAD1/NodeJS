const express = require('express');
const path = require('path');
const App = express();
App.set('vash engine','vash')
App.get('/',(req,res)=> {
    res.render('index.vash',{name:'Nima'});
})
App.listen(6969);
console.log('Server Is Running');