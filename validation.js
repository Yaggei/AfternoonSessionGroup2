function register(){
    var fullname =  document.getElementById("fullname").value
    var email =  document.getElementById("email").value
    var number =  document.getElementById("number").value
    var password =  document.getElementById("password").value
    var confirmpassword =  document.getElementById("confirmpassword").value

    if(fullname === "" ||  email === "" || number === "" || password === "" || confirmpassword === ""){
        alert("Input data!!!!!").getElementById
        // document.getElementById("message").innerHTML = "Input data !!!!!"
    }
    else if(password.length < 4 || confirmpassword.length < 4){
        alert("Password should be atleast more than 4 characters !!!").getElementById
        // document.getElementById("message").innerHTML = "password should be at least more than 4 characters!!!"
    }
    else if(password.length > 8 || confirmpassword.length > 8){
        alert("Password should not be more than 8 characters !!!").getElementById
        // document.getElementById("message").innerHTML = "password should not be more than 8 characters!!!"
    }
    else if(password != confirmpassword){
        alert("Password does mot match").getElementById
        // document.getElementById("message").innerHTML = "password does not match!!!"
    }
   else if(!fullname.match (/^[A-Za-z ]+$/)){
       alert("OMO YOU GO TRY INPUT YOUR FULL NAME OO !!!").getElementById
    //    document.getElementById("message").innerHTML = "OMO YOU GO TRY INPUT YOUR FULL NAME OO!!!"
   }
   else if(!email.match(/\S+@\S+\.\S+/)){
       alert("BROS CHECK YOUR GMAIL 1ST").getElementById
    //    document.getElementById("message").innerHTML = "BROS CHECK YOUR GMAIL 1ST!!!"
   }
    else {
        window.location.href = "dashboard.html"
        document.getElementById("yagi").innerHTML = " CONGRATS REGISTRATION WAS SUCCESSFUL.."
    }
} 