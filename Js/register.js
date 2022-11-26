if (localStorage.getItem('info') === null){
    localStorage.setItem('info',JSON.stringify([]));
}
var register = document.getElementById('register');
var passwordCheck = false;
register.onclick = function(){
    let email = document.getElementById("email").value ;
    let nameInput = document.getElementById("name").value ;
    let passwordInp = document.getElementById("password").value ;
    let retypePassword =document.getElementById("retypePassword").value;
    let patternForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let resultForEmail = patternForEmail.test(email);
    let patternForName = /\w*[A-Z]\w*/;
    let resultForName = patternForName.test(nameInput);
    let patternForPassword = /(?=.*[A-Z]\w{0}[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let resultForPassword = patternForPassword.test(passwordInp);
    if (resultForEmail) {
        document.getElementById('invalidEmail').style.opacity = '0';
    }
    else{
       
        document.getElementById('invalidEmail').style.opacity = '1';
        
    }
    if (resultForName) {
        document.getElementById("invalidName").style.opacity ='0'
    }
    else{
        
        document.getElementById("invalidName").style.opacity ='1'
    }
    if (resultForPassword) {
        document.getElementById("invalidPassword").style.opacity = '0'
    }
    else{
        
        document.getElementById("invalidPassword").style.opacity = '1'
    }
    let passwordCheck = (passwordInp !== retypePassword);
    if(passwordCheck){
        document.getElementById('notSamePassword').style.opacity = '1'
    }
    else{
        document.getElementById('notSamePassword').style.opacity = '0'
        
    }
    
    let info = JSON.parse(localStorage.getItem('info'));
    
    let someUser = info.find(x=>x.Username === nameInput);
    let someEmail = info.find(x=>x.Email === email);

    if (someUser === undefined && someEmail === undefined && resultForName && resultForEmail && !passwordCheck) {
        info.push({
            Username : nameInput,
            Email : email,
            Password : passwordInp
        });
        alert('User added!');
        location.reload();
    }
    else{
       if (someUser !== undefined) {
        document.getElementById('invalidName').innerHTML = 'This name already exists';
        document.getElementById("invalidName").style.opacity ='1'
       }
       if (someEmail !== undefined) {
        document.getElementById('invalidEmail').innerHTML = 'This email already exists';
        document.getElementById('invalidEmail').style.opacity = '1';
        console.log("Some Email");
       }
       
    }
    
    localStorage.setItem('info',JSON.stringify(info))
    let foward = document.getElementById('foward');
    
}
let passwordType = document.getElementById('password');
let eye = document.getElementById('eye');
eye.onclick =function(){
    if (eye.classList.contains('fa-eye')) {
        eye.classList.replace('fa-eye','fa-eye-slash');
        passwordType.type = 'text'
    }
    else{
        eye.classList.replace('fa-eye-slash','fa-eye');
        passwordType.type = 'password'
    }
}