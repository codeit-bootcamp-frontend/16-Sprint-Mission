document.addEventListener("DOMContentLoaded", function () {
const emailInput = document.getElementById("email");
const passWord = document.getElementById("password");
const passWord2 = document.getElementById("password2");
const loginBtn = document.getElementById("login_btn");
const wraingAll = document.querySelectorAll(".wraing");

emailInput.addEventListener("focusout",function(){
 
    let par = emailInput.parentNode
    let wraing = par.nextElementSibling;
    let emailValue = emailInput.value
    let emailVaild = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue.length === 0){
        emailInput.classList.add("on");
        loginBtn.classList.add("gray");
        wraing.classList.add("on");
        wraing.textContent = "이메일을 입력해주세요."; 
    }else if(!emailVaild.test(emailValue)){
        emailInput.classList.add("on");
        loginBtn.classList.add("gray");
        wraing.classList.add("on"); 
        wraing.textContent = "잘못된 이메일 형식입니다."; 
    }else{
        emailInput.classList.remove("on");
        wraing.classList.remove("on"); 

        let hasOnClass = false;
        wraingAll.forEach(function (el) {
            if (el.classList.contains("on")) {
                hasOnClass = true;
              }
        });

        if (!hasOnClass) {
            loginBtn.classList.remove("gray");
        }
    }

});

passWord.addEventListener("focusout",function(){
    let loginBtn = document.getElementById("login_btn");
    let par = passWord.parentNode
    let wraing = par.nextElementSibling;
    if(passWord.value.length == 0){
        passWord.classList.add("on");
        wraing.classList.add("on"); 
        wraing.textContent = "비밀번호를 입력해주세요";
        loginBtn.classList.add("gray");
    }else if(passWord.value.length < 8){
        passWord.classList.add("on");
        wraing.classList.add("on"); 
        wraing.textContent = "비밀번호를 8자 이상 입력해주세요.";
        loginBtn.classList.add("gray");
    }else{
        passWord.classList.remove("on");
        wraing.classList.remove("on"); 
       
        let hasOnClass = false;
        wraingAll.forEach(function (el) {
            if (el.classList.contains("on")) {
                hasOnClass = true;
              }
        });
        if (!hasOnClass) {
            loginBtn.classList.remove("gray");
        }
    }
});

passWord2.addEventListener("focusout",function(){
    let loginBtn = document.getElementById("login_btn");
    let par = passWord2.parentNode
    let wraing = par.nextElementSibling;
    if(passWord2.value.length == 0){
        passWord2.classList.add("on");
        wraing.classList.add("on"); 
        wraing.textContent = "비밀번호를 입력해주세요";
        loginBtn.classList.add("gray");
    }else if(passWord.value == passWord2.value){
        passWord2.classList.add("on");
        wraing.classList.add("on"); 
        wraing.textContent = "“비밀번호가 일치하지 않습니다.";
        loginBtn.classList.add("gray");
    }else{
        passWord2.classList.remove("on");
        wraing.classList.remove("on"); 
       
        let hasOnClass = false;
        wraingAll.forEach(function (el) {
            if (el.classList.contains("on")) {
                hasOnClass = true;
              }
        });
        if (!hasOnClass) {
            loginBtn.classList.remove("gray");
        }
    }
});


});