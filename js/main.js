// Smooth Scrolling
$("#navbar a, #link-topo").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
        
    }
});

var btn = $("#back-to-top");

btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});