let gameSeq=[];
let userSeq=[];
let buttons=["pink","mustard","purple","green"];

let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started==false){
      started=true;
      levelUp();
   }
})
function btnFlash(btn){

   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);
}
function btnPress(){

   let btn = this;
   btnFlash(btn);
   userCol = btn.getAttribute("id");
   userSeq.push(userCol);
   checkAns(userSeq.length-1);
}
function checkAns(idx){
  
   if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length===gameSeq.length){
         setTimeout(levelUp,1000);
      }
   }else{
      h2.innerHTML=`Game Over! Your score was <b>${level} </b> <br> Press any key to start !`;
      reset();
   }
}
function levelUp(){

   userSeq=[];
   level++;
   h2.innerText=`Level ${level}`;
   let randomIndex= Math.floor(Math.random()*4);
   let randomColor= buttons[randomIndex];
   let randomButton = document.querySelector(`.${randomColor}`)
   gameSeq.push(randomColor);
   btnFlash(randomButton);
}

let allButtons = document.querySelectorAll(".btn");
for( btn of allButtons){
   btn.addEventListener("click",btnPress);
}
function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}
