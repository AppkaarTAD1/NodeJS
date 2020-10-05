console.log('before');
GetUser(1,(User)=>{
    console.log('User',User)
})
GetRep(1,(Repo)=>{
    console.log('repositories',Repo);
})
console.log('after');
function GetUser(id,callback){
    setTimeout(()=>{
        console.log('Reading A User From Database');
        callback({id: id,Username:"nimajvnm"});

    },2000);
}
function GetRep(id,callback){
   setTimeout(()=>{
       callback(['repo1','repo2','repo3']);
   },2000);
}