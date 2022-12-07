// console.log("hii");

// signup section
if(document.getElementById("finalsignup")){
    document.getElementById("finalsignup").onclick = function signUp() {
        let returnval = true;
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
    
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
    
        if (name == "") {
            document.getElementById("nameerror").innerHTML = "*Please provide your name!"
            returnval = false;
        }
        else if (name.length < 5) {
            document.getElementById("nameerror").innerHTML = "*Name should be atleast 5 character long"
            returnval = false;
        }
    
    
        if (email == "") {
            document.getElementById("mailerror").innerHTML = "*Please provide your email!"
            returnval = false;
        }
        else if (email.length < 15) {
            document.getElementById("mailerror").innerHTML = "*Email should be atleast 15 character long"
            returnval = false;
        }
    
    
        if (password == "") {
            document.getElementById("passerror").innerHTML = "*Please provide your password!"
            returnval = false;
        }
        else if (password.length < 8) {
            document.getElementById("passerror").innerHTML = "*Password should be atleast 8 character long"
            returnval = false;
        }
        return returnval;
    }
}


let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    confirm('Do you really want to submit the form?');

})

// login section
if(document.getElementById("loginbtn")){
    document.getElementById("loginbtn").onclick = function logIn() {

        let email = document.getElementById("useremail").value;
        let password = document.getElementById("userpassword").value;
    
        let email1 = localStorage.getItem("Email")
        let password1 = localStorage.getItem("Password")

    
        if(email==email1 && password==password1){
            window.location.href="product.html";
        }
        else {
            alert("email and password is incorrect");
        }
    }
    
}


