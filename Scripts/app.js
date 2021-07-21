// -------------------------------------------------------------------------
// Tutorial for function: https://www.youtube.com/watch?v=oUSvlrDTLi4
// -------------------------------------------------------------------------


function smoothScroll(target, duration) {
    var targetDiv = document.querySelector(target);
    var targetPosition = targetDiv.getBoundingClientRect().top; // Getting distance (in px) relative to the top of certain element
    var startPosition = window.pageYOffset  // Getting distance (in px) relative to your window
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        console.log(startTime);
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run)  // NO SCROLLS for x axis (first param), but have an animation scroll for y axis (second param)
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Function for animation
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);   // Calls animation and loops through it @ 60 FPS
}



// // Event listeners
// var section1 = document.querySelector(".section1");
// var section2 = document.querySelector(".section2");


// section1.addEventListener("click", () => {
//     // Top section to bottom section
//     smoothScroll(".section2", 1500);
// });

// section2.addEventListener("click", () => {
//     // Bottom section to top section
//     smoothScroll(".section1", 1500);
// });