// jshint devel:true
window.onload = function () {

  if ($( window ).width() > 767) {
    $("#welcome-modal").modal();
  }


  $('.sidebar-nav-wrap, .shadow-box').mouseenter(function () {
    $(this).addClass('mouse_over');
    $(".content-with-sidebar").addClass("sidebar-opened");
  })

  var timeoutId;
  $('.sidebar-nav-wrap, .shadow-box').mouseleave(function () {
    var $this = $(this);
    timeoutId = setTimeout(function () {
      $this.removeClass('mouse_over');
      if ($('.mouse_over').length == 0) {
        $(".content-with-sidebar").removeClass("sidebar-opened");
      }
    }, 20);
  });


  $('#instagram-feed').pongstgrm({
    accessId: '2121083481',
    accessToken: '2121083481.1677ed0.8737974840cf46309a44befee7cfdd38',
    show: 'feed',
    count: 6,
    column: "col-xs-12 col-sm-4 col-md-4 col-lg-4",
    button: "btn btn-default",
    comments: false,
    effects: "scaling"
  });


  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  $(".maps").mouseleave(function () {
    $('.maps iframe').css("pointer-events", "none");
  });

  $('.wishlist-btn').click(function () {
    $(this).toggleClass('check');
  });

  $('.completed-btn').click(function () {
    $(this).toggleClass('check');
  });


}
