let repo=document.querySelector(".repo");
let flag=0;
function hello(){
   if(flag==0){
    console.log("hello");
    repo.style.opacity=1;
  
    flag=1;
}
else{
    console.log("jj");
    repo.style.opacity=0;
    flag=0;
   }
}
