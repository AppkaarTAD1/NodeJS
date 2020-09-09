var Question;
Question =
[
    "Whats Your Name = ",
    "Whats Your Hobby =",
    "What Language you Use For Programming ="
]
var answer = [];
function ask (i)
{
    process.stdout.write(`\n\n\n ${Question[i]}`);
    process.stdout.write("  >  ");
}
process.stdin.on('data',function (data)
{
    answer.push(data.toString().trim());
    if(answer.length < Question.length)
    {
        ask(answer.length);
    }
    else
    {
        process.exit();
    };
})
process.on('exit',function ()
{
    process.stdout.write('\n\n\n');
    process.stdout.write(` MR.${answer[0]} that loves ${answer[1]} He can learn this language (${answer[2]}) if you spent time`);
    process.stdout.write('\n\n\n');
});

ask(0);