document.getElementById('login-submit').addEventListener('click',function(){
    //console.log('button clicked');
        //get user email
    const emailField = document.getElementById('user-email');
   // console.log(emailField);
   const userEmail = emailField.value;
   //console.log(userEmail);

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //console.log(userPassword);
    
    if(userEmail == 's@gmail.com' && userPassword == 'secret'){
        location.href= 'banking.html';
    }
})