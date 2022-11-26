let button = document.getElementById('button');
let hover = document.getElementsByClassName('hover');
function SignIn(){
    let inputValueName = document.getElementById("name1").value ;
    let inputValueEmail = document.getElementById('email1').value ;
    let inputValuePassword = document.getElementById('password1').value ;
    let info = JSON.parse(localStorage.getItem('info'));
    var checkName = false;
    var checkPassword = false;
    var checkEmail= false;
    info.forEach(info => {
        var username = info.Username ;
        var password = info.Password 
        var email = info.Email 
        if (username === inputValueName) {
            document.getElementById('invalidName').style.opacity = '0';
            checkName =true;
        }
        else if (inputValueName === ""){
            document.getElementById('invalidName').style.opacity = '0';
        }
        else{
            document.getElementById('invalidName').style.opacity = '1';
        }
        if (password === inputValuePassword) {
            document.getElementById('invalidPassword').style.opacity = '0';
            checkPassword = true;
        }
        else if( inputValuePassword === "" ){
            document.getElementById('invalidPassword').style.opacity = '0';
        }
        else{
            document.getElementById('invalidPassword').style.opacity = '1';
        }
        if (email === inputValueEmail) {
            document.getElementById('invalidEmail').style.opacity = '0';
            checkEmail = true;
        }
        else if( inputValueEmail === "" ){
        document.getElementById('invalidEmail').style.opacity = '0';
        }
        else{
            document.getElementById('invalidEmail').style.opacity = '1';
        }
        if (checkEmail && checkName && checkPassword) {
            alert('Welcome!');
            window.close();
            location.reload()
        }
    });
}
let eye = document.getElementById('eye');
eye.onclick =function(){
    if (eye.classList.contains('fa-eye')) {
        eye.classList.replace('fa-eye','fa-eye-slash');
        document.getElementById('password1').type = 'text'
    }
    else{
        eye.classList.replace('fa-eye-slash','fa-eye');
        document.getElementById('password1').type = 'password'
    }
}