// -------------------------------------------------------------------------
// Tutorial for function: https://www.youtube.com/watch?v=oUSvlrDTLi4
// -------------------------------------------------------------------------


// function smoothScroll(target, duration) {
//     var targetElement = document.querySelector(target);
//     var targetPosition = targetElement.getBoundingClientRect().top; // Getting distance (in px) relative to the top of certain element
//     var startPosition = window.pageYOffset;  // Getting distance (in px) relative to your window
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animation(currentTime) {
//         if (startTime === null) startTime = currentTime;
//         console.log(startTime);
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run)  // NO SCROLLS for x axis (first param), but have an animation scroll for y axis (second param)
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     // Function for smooth transition
//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(animation);   // Calls animation and loops through it @ 60 FPS
// }



// Event listeners
// let homeButton = document.querySelector("#home-btn");
// let aboutButton = document.querySelector("#abt-btn");
// let skillButton = document.querySelector("#skill-btn");
// let latestWorkButton = document.querySelector("#latest-wrk-btn");


// window.scrollTo() approach
function smoothScroll(event) {
    const targetId = event.currentTarget.getAttribute("href");
    console.log(targetId);
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,    // Getting distance from top
        behavior: "smooth"
    });
}

const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(elem => elem.addEventListener("click", smoothScroll));
