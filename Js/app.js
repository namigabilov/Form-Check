var button = document.getElementById('button');
var hover = document.getElementsByClassName('hover');

button.onclick = function () {
    var email = document.getElementById("email").value ;
    var nameInput = document.getElementById("name").value ;
    var passwordInp = document.getElementById("password").value ;
    var patternForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var resultForEmail = patternForEmail.test(email);
    var patternForName = /\w*[A-Z]\w*[A-Z]\w*/;
    var resultForName = patternForName.test(nameInput);
    var patternForPassword = /(?=.*[A-Z]\w{0}[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var resultForPassword = patternForPassword.test(passwordInp);
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

}
