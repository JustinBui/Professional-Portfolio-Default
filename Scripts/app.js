// JQuery Smooth Scroll when clicking on navbar buttons
// Reference: https://www.youtube.com/watch?v=y9nlfqT4s9s
$(".navbar a").on("click", function (e) {
    if (this.hash !== "") {
        e.preventDefault(); // Preventing the default behavior when clicking buttons
        const hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800);    // scrolling from the top taking 800 ms
    }
});