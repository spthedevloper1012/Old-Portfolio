function demo() {
    var fname = document.getElementById("fname").value;
    var phoneno = document.getElementById("phoneno").value;
    var password = document.getElementById("pwd").value;
    var email = document.getElementById("email").value;

    if (fname != fname.match(/[a-z]{3,}/)) {
        alert("invalid");
    }
    else if (phoneno != phoneno.match(/[0-9]{9,}/)){
        alert("invalid phone no");
    }
    else if (password != password.match(/[A-Z,a-z,0-9]{0,10}/)){
        alert("invalid password");
    }
    else if (email != email.match(/[a-z]+@[a-z]{5,10}/)){
        alert("invalid email");
    }    
    else{
        alert("thanks for submiting");
    }
}

// Time section of blog
var date = new Date();

setInterval(currentTime,1000);
function currentTime(){
    const b = new Date();
    document.getElementById("currenttime").innerHTML = b.toLocaleTimeString();
}
setInterval(currentDate,1000);
function currentDate(){
    const b = new Date();
    document.getElementById("currentdate").innerHTML = b.toLocaleDateString();
}

setInterval(currentTime1,1000);
function currentTime1(){
    const b = new Date();
    document.getElementById("currenttime1").innerHTML = b.toLocaleTimeString();
}
setInterval(currentDate1,1000);
function currentDate1(){
    const b = new Date();
    document.getElementById("currentdate1").innerHTML = b.toLocaleDateString();
}

setInterval(currentTime2,1000);
function currentTime2(){
    const b = new Date();
    document.getElementById("currenttime2").innerHTML = b.toLocaleTimeString();
}
setInterval(currentDate2,1000);
function currentDate2(){
    const b = new Date();
    document.getElementById("currentdate2").innerHTML = b.toLocaleDateString();
}