// jshint devel:true
window.onload = function() {

//  $("#welcome-modal").modal();

    $( ".sidebar-nav-wrap" ).hover(function() {
            $(".content-with-sidebar").toggleClass("sidebar-opened");
//        $( ".shadow-box" ).animate({
//            opacity: 1
//        }, 1500 );
    });

    $( ".shadow-box" ).hover(function() {
        $(".content-with-sidebar").toggleClass("sidebar-opened");
    });


  $('#instagram-feed').pongstgrm({
    accessId:     '2121083481',
    accessToken:  '2121083481.1677ed0.8737974840cf46309a44befee7cfdd38',
    show:         'feed',     //show: 'themostbeautifulplacesonearth'
    count:         6,
    column:        "col-xs-12 col-sm-4 col-md-4 col-lg-4",
    button:           "btn btn-default",
    comments: false,
    effects:    "scaling"});




}
