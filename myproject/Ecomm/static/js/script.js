// // console.log("this is working");
// var x = "hello";

// var x = 67;

// let y = 98;

// let y = 89;
// alert(x);
// console.log

// var x; 

// for (x = 0; x <= 5; x++){
//     console.log(x);a
// }
function validateform() {
    x = document.forms["myform"]["email"].value;
    if (x == ""){
        // alert("please enter your email");
        document.getElementById('email1').placeholder = "enter your email";
        document.getElementById('email1').style.border = "2px solid red";      
        var x = document.getElementById('valid'); 
        x.innerHTML ="enter your email";
        x.style.color = "red";
        return false;
    }
}
function crElement() {
    x = document.getElementsByClassName("myname");
    console.log(x);
    x[0].innerHTML = ("heeeyyyyyyy");
    x = document.createElement("input");
    z = document.createElement("label");
    x.setAttribute("class", "myname");
    y = document.getElementById("mydiv");
    y.appendChild(x);
    y.appendChild(y);
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                