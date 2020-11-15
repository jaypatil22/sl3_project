$(document).ready(function () {
    $('.navbar-nav li a').click(function(e) {

        
        $('.navbar-nav li.active').removeClass('active');
        var $parent = $(this).parent();
        // console.log($parent);
        $parent.addClass('active');
        e.preventDefault();
        var login = $('.active a').text();
        // console.log(login);
        // console.log($('.dropdown').text());
        if(login.indexOf("About Us") == -1) {
            document.getElementById('logintitle').innerHTML = login;
            var image = "url('../images/" + login.toLowerCase().split(' ')[0] + ".jpg'";
            document.getElementById('bg').style.backgroundImage = image;
        }
    });
});


function submitForm() {
    var active = $('#logintitle');
    var url = "./" + active.text().toLowerCase().split(" ")[0] + ".html";
    console.log(url);
    window.open(encodeURI(url), "_self");
}