// Clicking the gmail icon to have my gmail copied to user's clipboard
function copy(myText) {
    var $inp = $("<input>");
    $("body").append($inp);
    $inp.val($(myText).text()).select();
    document.execCommand("copy");
    $inp.remove();

    // Animations showing text "Gmail Copied to Cliboard!"
    $(".alert").fadeIn(1000, function () {
        $(".alert").fadeOut();
    });
}

$(".gmail-logo").on("click", function () {
    copy("<P>jbui3493@gmail.com</P>");
});