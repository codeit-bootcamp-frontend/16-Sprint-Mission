document.addEventListener("DOMContentLoaded", function () {
const emailInput = document.getElementById("email");
const passWord = document.getElementById("password");


emailInput.addEventListener("focusout",function(){
    let par = emailInput.parentNode
    let wraing = par.nextElementSibling;
    if(emailInput.value.length == 0){
        wraing.classList.add("on"); 
    }else{
        wraing.classList.remove("on"); 
    }
});

passWord.addEventListener("focusout",function(){
    let par = passWord.parentNode
    let wraing = par.nextElementSibling;
    if(passWord.value.length == 0){
        wraing.classList.add("on"); 
    }else{
        wraing.classList.remove("on"); 
    }
});

});