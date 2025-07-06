let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let msg=document.querySelector(".msg");
let userscore=document.querySelector(".user-score");
let compscore=document.querySelector(".comp-score");
let rst=document.querySelector(".rst-btn");
let userchoice="";
let userwin=0;
let compwin=0;
const choice=["Rock", "Paper", "Scissor"];


function autochoice(){
    const compchoice=choice[Math.floor(Math.random()*(choice.length))];
    console.log(compchoice);
    return compchoice;
}


rock.onclick=()=>{
 userchoice="Rock";
 win(userchoice);
}
paper.onclick=()=>{
 userchoice="Paper";
 win(userchoice);
}
scissor.onclick=()=>{
 userchoice="Scissor";
 win(userchoice);
}



function win(userchoice){
    let compchoice=autochoice();
    if(userchoice=="Rock"&& compchoice=="Paper"){
    compwin++;
    msg.innerText=` You lose!!! \n ${userchoice} does not beat ${compchoice}`;
    compscore.innerText=compwin;
}
    else if(userchoice=="Rock"&& compchoice=="Scissor"){
    userwin++;
    msg.innerText=` You win!!! \n ${userchoice} beats ${compchoice}`;
    userscore.innerText=userwin;
}
    else if(userchoice=="Paper"&& compchoice=="Scissor"){
    compwin++;
    msg.innerText=` You lose!!! \n ${userchoice} does not beat ${compchoice}`;
    compscore.innerText=compwin;
}
    else if(userchoice=="Paper"&& compchoice=="Rock"){
    userwin++;
    msg.innerText=` You win!!! \n ${userchoice} beats ${compchoice}`;
    userscore.innerText=userwin;
}
    else if(userchoice=="Scissor"&& compchoice=="Rock"){
    compwin++;
    msg.innerText=` You lose!!! \n ${userchoice} does not beat ${compchoice}`;
    compscore.innerText=compwin;
}
    else if(userchoice=="Scissor"&& compchoice=="Paper"){
    userwin++;
    msg.innerText=` You win!!! \n ${userchoice} beats ${compchoice}`;
    userscore.innerText=userwin;
}
    else
    msg.innerText=`It's a draw! \n  ${userchoice} and ${compchoice}`;
}




rst.onclick=()=>{
    userwin=0;
    compwin=0;
    userscore.innerText=userwin;
    compscore.innerText=compwin;
    msg.innerText=`Game Start's`;
}