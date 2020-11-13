$(document).ready(function () {
    $('.navbar-nav li a').click(function(e) {

        $('.navbar-nav li.active').removeClass('active');

        var $parent = $(this).parent();
        // console.log($parent);
        $parent.addClass('active');
        e.preventDefault();
    });
});

function submitForm() {
    var active = $('.navbar-nav li.active a');
    var url = "./" + active.text().toLowerCase().split(" ")[0] + ".html";
    console.log(url);
    window.open(encodeURI(url), "_self");
}