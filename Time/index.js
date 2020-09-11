var WaitTime = 3000;
var CurrentTime = 10;
var WaitInterval = 10;
var PercentWaited = 0;
function WriteWaitingPercentage(p)
{
process.stdout.clearLine();
process.stdout.cursorTo(0);
process.stdout.write(`Writing..... ${p}% `);

};
console.log('Wait For It');
var interval = setInterval(function ()
{
CurrentTime += WaitInterval;
// console.log(`Waiting ${CurrentTime/1000} Seconds....`);
PercentWaited = Math.floor((CurrentTime/WaitTime)*100);
WriteWaitingPercentage(PercentWaited);
},WaitInterval);
setTimeout(function ()
{
clearInterval(interval);
WriteWaitingPercentage(100);
console.log('Done!! \n');
} ,WaitTime);

WriteWaitingPercentage(PercentWaited);