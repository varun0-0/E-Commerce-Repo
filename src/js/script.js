// Header adjustment for <768px
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // add hamburger icon
        toggle.innerHTML = `<i class="fa fa-bars"></i>`;
    }
    else {
        menu.classList.add("active");
        // add X icon
        toggle.innerHTML = `<i class="fa fa-times"></i>`;
    }
}
toggle.addEventListener("click", toggleMenu, false);

// Account Page, hide and show elements when, and if required.
var logForm = document.getElementById("loginForm");
var regForm = document.getElementById("registerForm");
var remLog = document.getElementById("removeLog");
var remReg = document.getElementById("removeReg");

function login() {
    remLog.style.display = "none";
    remReg.style.display = "block";
    logForm.style.display = "flex";
    regForm.style.display = "none";
}

function register() {
    remReg.style.display = "none";
    remLog.style.display = "block";
    regForm.style.display = "flex";
    logForm.style.display = "none";
}

// Preview images for the same product slider
var prodImg = document.getElementById("prodImg");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function () {
    prodImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    prodImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    prodImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    prodImg.src = smallImg[3].src;
}


var total = 0;

function tots()
{
    var sub_total =  
    parseFloat(document.getElementById('163.00').innerHTML) +
    parseFloat(document.getElementById('60.00').innerHTML)  +
    parseFloat(document.getElementById('57.99').innerHTML)  +
    parseFloat(document.getElementById('60.99').innerHTML)  ;
    
    document.getElementById('sub').innerHTML = sub_total.toFixed(2);

    total = (parseFloat(20) + sub_total).toFixed(2);

    document.getElementById('total').innerHTML = total;
}

function removerow(val,id) 
{
    var rmved_amt = parseFloat(document.getElementById(id).innerHTML);

    document.getElementById(val).remove();
    var sub_total = parseFloat(document.getElementById('sub').innerHTML) - rmved_amt;
    document.getElementById('sub').innerHTML = sub_total.toFixed(2);
    total = (parseFloat(20) + sub_total).toFixed(2);
    document.getElementById('total').innerHTML = total;

    if(total - 20.00 == 0)
    {
        document.getElementById('main_content').style.visibility = "hidden";
        document.getElementById('hid_content').style.display = "block";
    }
}

function disp(pt, val)
{
    var z = document.getElementById(pt);
    var x = document.getElementById(val);
    var v = parseFloat(val);
  
    x.innerHTML = (z.value * v).toFixed(2);
    tots();
}

function chek_total() 
{
    
    total ? localStorage.setItem("Total_val", total) : localStorage.setItem("Total_val", 361.96)
    // if(total)
    // {
    //     localStorage.setItem("Total_val", total);
    // }
    // else {
    //     localStorage.setItem("Total_val", 361.96);
    // } 
}
    