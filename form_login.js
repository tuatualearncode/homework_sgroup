
let username = document.getElementById("inp1");
let password = document.getElementById("inp2");
let logIn = document.querySelector('#login');
let Isusername = false;
let Ispassword = false;
// console.log( Isusername );
// console.log( Ispassword );
Isusername = username.addEventListener('input', function() {
    // console.log("alo", username.value);
    // console.log( username.value[0] )
    if ( username.checkValidity() ) {
        document.querySelector('.error_username').style.display = 'none';
        Isusername = true;
        
    } else {
        document.querySelector('.error_username').style.display = 'block';
        Isusername = false;
    }
    // console.log( Isusername );
    return Isusername
})
Ispassword = password.addEventListener('input', function() {
    // console.log("alo", username.value);
    // let check = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if ( !password.checkValidity() ) {
    document.querySelector('.error_password').style.display = 'block';
    Ispassword = false;
    } else {
    document.querySelector('.error_password').style.display = 'none';
    Ispassword = true;
    }
    // console.log( Ispassword );
    return Ispassword
})
logIn.addEventListener( 'click', function() {
    if ( Isusername == true && Ispassword == true && username.value != "" && password.value != ""  ) {
        alert("Success Login ");
        document.querySelector('.error_password').style.display = 'none';
        document.querySelector('.error_username').style.display = 'none';
    } else {
        // alert("Fail Login");
        if ( Isusername == false || username.value == "" ) {
            document.querySelector('.error_username').style.display = 'block';
        } 
        if ( Ispassword == false || password.value == "" ) {
            document.querySelector('.error_password').style.display = 'block';
        } 
    }
})