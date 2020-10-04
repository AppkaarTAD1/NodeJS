const Joi = require('joi');
const Helmet = require('helmet');
const express = require('express');
const Morgan = require('morgan');
const Logger = require('./Logger');
const Config = require('config');
const Auth = require('./Authentication');
//----------------------
const App = express();
App.use(express.json());
App.use(express.urlencoded({extended: true}));
App.use(express.static(__dirname + '/Public'));
App.use(Logger);
App.use(Auth);
App.use(Helmet());
if(App.get('env') === 'development') {
    App.use(Morgan('tiny'));
    console.log('Morgan Enabled!');
}
//Configuration


const Courses = [
    {id: 1,name: 'NodeJS'},
    {id: 2,name: 'Java'},
    {id: 3,name: 'Python'}
];
App.get('/',(req,res)=>{
    res.send('Hello world');
});
App.get('/courses',(req,res)=>{
    res.send(Courses);
});
App.post('/courses',(req,res)=>{
    const {Error} = ValidateCourse(req.body);
    if(Error) {
       return  res.status(400).send(Error.details[0].message);

    }
    const course = {
        id: Courses.length +1 ,
        name: req.body.name
    };
    Courses.push(course);
    res.send(course);
});
App.put('/courses/:id',(req,res)=>{
    const course = Courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
    {
        return res.status(404).send('The Given Id Was Not Found');
    }
    const {Error} = ValidateCourse(req.body);
    if(Error) {
        res.status(400).send(Error.details[0].message);
        return;
    }
    course.name = req.body.name;
    res.send(course);
});
function ValidateCourse(course){
    const Schema = {
        name: Joi.string().min(3).required()
    };
    return  Joi.valid(course,Schema);
}
App.delete('/courses/:id',(req,res)=>{
    const course = Courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
    {
        return res.status(404).send('The Given Id Was Not Found');

    }
    const Index = Courses.indexOf(course);
    Courses.splice(Index,1);
    res.send(course);

})
App.get('/Courses/:id',(req,res)=>{
    const course = Courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
    {
        return res.status(404).send('The Given Id Was Not Found');

    }else{
        res.send(course);
    }
})
const Port = process.env.port || 1111;
App.listen(Port,()=> console.log(`Server Started on ${Port}....`))