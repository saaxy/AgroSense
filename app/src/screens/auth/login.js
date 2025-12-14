// check password strength
function checkStrength(){
    const password = document.getElementById("password").value;
    const strengthText = document.getElementById("strengthText");

    let strength = 0;
    if(password.length >= 8) strength++;
    if(/[A-Z]/.test(password)) strength++;
    if(/[a-z]/.test(password)) strength++;
    if(/[0-9]/.test(password)) strength++;
    if(/[!@#$%^&*]/.test(password)) strength++;

    if(password.length === 0){
        strengthText.textContent = "";
        
    }
    else if(strength <= 2){
        strengthText.textContent = "Weak password";
        strengthText.className = "weak";
    }else if(strength <= 4){
        strengthText.textContent = "Medium password";
        strengthText.className = "medium";
    }else{
        strengthText.textContent = "Strong password";
        strengthText.className ="strong";

    }
}

function isStrongPassword(password){
    return ((password.length >= 8) && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[@#$%^&*!]/.test(password));

}

if(!isStrongPassword(password)){
    alert("Password must be Strong");
    return;
}

function togglePassword(){
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";

}

document.getElementById("loginform").addEventListener("submit" , function(e){
    e.prevenDefault(); //here stop the form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    //reset errors
    usernameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;
     if(username === ""){
        usernameError.textContent = "Username or email is required";
        isValid = false;
     }
     if(password === ""){
        passwordError.textContent = "password is required";
        isValid = false;
     }

     if(isValid){
        alert("Login successful");
        // this.submit(); //enable when backend is done
     }
});



