let btn=document.querySelectorAll(".all");
let user='';
btn[0].addEventListener("click",()=>{
    user="snake";
    console.log("user",user);
    playGame();
});
btn[1].addEventListener("click",()=>{
    user="water"; 
    console.log("user",user); 
    playGame();
});
btn[2].addEventListener("click",()=>{
    user="gun"; 
    console.log("user",user); 
    playGame();
});
function playGame(){
let n=Math.random()*3;
console.log(n);
let sys='';
if(n>0 && n<1){
    sys='snake';
    console.log(sys);
}
else if(n>1 && n<2){
    sys='water';
    console.log(sys);
}
else{
    sys='gun';
    console.log(sys);
}
if(user===sys){
    alert("its a draw");
}
if(user=='snake'&& sys=='water'){
    alert("you won the game");
}
else if(user=='water'&& sys=='snake'){
    alert("you lost the game");
}
else if(user=='water'&& sys=='gun'){
    alert("you won the game");
}
else if(user=='gun'&& sys=='water'){
    alert("you lost the game");
}
else if(user=='gun'&& sys=='snake'){
    alert("you won the game");
}
else if(user=='snake'&& sys=='gun'){
    alert("you lost the game");
}
btn.removeEventListener("click");
}