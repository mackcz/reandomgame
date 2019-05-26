function toggleDarkLight() {
    var body = document.getElementById('body');
    var currentClass = body.className;
    body.className = currentClass == 'dark-mode' ? 'light-mode' : 'dark-mode';
}


// Set the date we're counting down to
//var countDownDate = new Date('Aug 5, 2018 21:20').getTime();
var countDownDate = new Date('May 26, 2019 21:20').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById('demo').innerHTML = hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById('demo').innerHTML = 'The tournament will begin shortly ';
    }
}, 1000);
// Theme switch


function initTheme() {
    var darkThemeSelected =
        localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark';
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
}
initTheme(); // if user has already selected a specific theme -> apply it
