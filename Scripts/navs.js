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
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        // Togglingt side nav
        nav.classList.toggle("nav-active");

        // Animating links
        navLinks.forEach((link, index) => {
            // Adding delay as links pop up
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.55}s`;
            }
        });

        // Burger animation when user clicks
        burger.classList.toggle("toggle");
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