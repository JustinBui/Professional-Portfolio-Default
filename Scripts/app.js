// Reference: https://www.youtube.com/watch?v=y9nlfqT4s9s
// Using JQuery for smooth scroll animations


// Clicking navbar buttons to scroll to specific sections of website
$(".button").on("click", function (e) {
    if (this.hash !== "") {
        e.preventDefault(); // Preventing the default behavior when clicking buttons
        const hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800);    // scrolling from the top taking 800 ms
    }
});

// Clicking burger icon to show navbar on mobile
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
}

navSlide(); // Calling this function

// Clicking link saying "Contact Me Below!" in About Me section
$(".scroll-to-contacts").on("click", function (e) {
    console.log(this.hash);
    if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});