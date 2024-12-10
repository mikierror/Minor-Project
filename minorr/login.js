const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginbutton = document.querySelector('.loginpage');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function fun1(){
    const login=document.querySelector("#email").value;
const password=document.querySelector("#password").value;
if(login=="miki@gmail.com" && password=="1234"){
    alert("success full login")
    window.location.href="indexx."
}
else{
    alert("wrong email and password");
}
}
loginbutton.addEventListener("click", function(){
    fun1();
})