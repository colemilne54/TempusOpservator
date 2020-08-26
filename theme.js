let header = document.getElementById("header");

dropdown.addEventListener("input", function() {
    if(dropdown.value == "light") {
        $('*').removeClass('dark');
        $('*').removeClass('jenna');
        return;
    }

    $("body, button, input, select, h1, h2").attr('class', dropdown.value);
});
