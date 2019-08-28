//LogIn section to dissapear after submitting password
const logIn = document.querySelector('.logIn');
const submitLogIn = document.querySelector('.submit');

submitLogIn.onclick = function(){
    logIn.style.display = "none";
}


//Making it possible to display and hide the start bar
function myFunction() {
    var start = document.querySelector('.startUi');
    if (start.style.display === 'none') {
        start.style.display = 'block';
    } else {
        start.style.display = 'none';
    }
}

//Setting up the clock

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
 
    m = checkTime(m);
    
    document.getElementById('time').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();
