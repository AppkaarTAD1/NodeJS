console.log(process.argv);
function Grab(flag){
    var index = process.argv.indexOf(flag);
    return (index == -1 ) ? null : process.argv[index+1];
};
var greeting = Grab('--Greeting');
var user = Grab('--user');
if (!user || !greeting){
    console.log('No User No Greeting');
} else
{
   console.log('Welcome' + user + greeting);
};
