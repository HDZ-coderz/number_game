var current_n=0;
var win=0;
var data=document.getElementById("val");
function rand(n=10){
    let r=Math.floor(Math.random()*n)+1;
    return r;
}
function win_n(){
    win=rand(52);
    document.getElementById("w").innerHTML=`Number required to win:<B>${win}</B>`;
}
function result(txt="?"){
        alert(txt);
        new_game();
}
function resp(){
    const value=parseInt(data.value);
    current_n=value+rand(2);
    if(current_n>win){
        current_n=value+1;
    }
    if(current_n==win){
        document.getElementById("g").innerText=current_n;
        result("You lost");
    }else{
        document.getElementById("g").innerHTML=current_n;
    }
}
function generate(){
    current_n=rand(50);
    while(current_n>(win-1)){
        current_n=rand(26);
    }
    document.getElementById("g").innerText=current_n;
}
function check(){
    const value=data.value;
    if(current_n<value&&current_n+3>value&&value<=win){
        if(value==win){
            result("You won");
        }else{
            resp();
        }
    }else{
        alert("Out of range input");
    }
}
//important
function call(){
    win_n();
    generate();
}
function new_game(){
    alert("New game!");
    call();
}
function r_close(){
    let elem=document.getElementById("rules");
    elem.style.opacity="0";
    setTimeout(()=>{
        elem.close();
    },1000);
}
//if user press enter key
data.addEventListener('keypress',(event)=>{
    let btn=document.querySelector(".go");
    if (event.key === "Enter") {
        btn.style.boxShadow="0px 0px 22px dodgerblue";
        setTimeout(()=>{btn.style.boxShadow="0px 0px 0px dodgerblue";},200);
        event.preventDefault();
        check();
    }
});