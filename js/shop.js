function icon(){
    let icon=document.getElementById("icon-menu")
    icon.style.width='20%';
}

function closeicon(){
    let icon=document.getElementById("icon-menu")
    icon.style.width='0';
   
}
// desktop icon
function icon1(){
    let icon=document.getElementById("mbl-side")
    icon.style.width='100%';
}
function closeicon1(){
    let icon=document.getElementById("mbl-side")
    icon.style.width='0';
}

let currentIndex = 0;
const sliderContent = document.getElementById("slider-content");

function changeSlide(n) {
    currentIndex += n;
    showSlide();
}

function showSlide() {
    const slides = document.getElementsByClassName("slide");

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(function() {
    changeSlide(1);
}, 5000);


// heart changing

// const btn = document.querySelector('.heart-fnc');

// const changeIcon = (e) => e.target.parentNode.querySelector('i').classList.toggle("fas");

// btn.addEventListener('click', changeIcon);



let h=document.getElementById("hide")
let z=document.getElementById("btn")

function hide(){
    h.style.display="block"
    z.style.display="none"
}
// Product selecting
function addQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value, 10);
    quantityInput.value = currentQuantity + 1;
}

function subtractQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value, 10);

    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

var targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 12);

    function updateTimer() {
        var now = new Date();
        var timeDifference = targetTime - now;

        if (timeDifference <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').innerHTML = "Time's up!";
            return;
        }

        var hours = Math.floor(timeDifference / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        var formattedTime = padZero(hours) + ' Hours : ' + padZero(minutes) + ' Mins : ' + padZero(seconds) + ' Secs';
        document.getElementById('timer').innerHTML = formattedTime;
    }

    function padZero(number) {
        return (number < 10 ? '0' : '') + number;
    }

    // Update the timer every second (1000 milliseconds)
    var timerInterval = setInterval(updateTimer, 1000);

    // Initial call to set the timer immediately when the page loads
    updateTimer();

    // media query
    
    function sidemenu(){
        let side=document.getElementById('left-btn')
        side.style.width='100%'
    }
    function closeicon2(){
        let icon=document.getElementById("left-btn")
        icon.style.width='0';
    }

  