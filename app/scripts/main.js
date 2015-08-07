// jshint devel:true
window.onload = function () {

  if ($(window).width() > 767) {
    $("#welcome-modal").modal();
  }

  $('.forgot-pass-btn').click(function () {
    $('.forgot-pass-form').removeClass('closed');
    $('.sign-in-form').addClass('closed');
  });

  $('.back-to-login').click(function () {
    $('.forgot-pass-form').addClass('closed');
    $('.sign-in-form').removeClass('closed');
  });


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


  if (typeof jQuery.fn.pongstgrm != 'undefined') {
    $('#instagram-feed').pongstgrm({
      accessId: '2121083481',
      accessToken: '2121083481.1677ed0.8737974840cf46309a44befee7cfdd38',
      //show: 'specific_user',
      //userId: '2067313449',
      count: 6,
      column: "col-xs-12 col-sm-4 col-md-4 col-lg-4",
      button: "btn btn-default",
      comments: false,
      effects: "scaling"
    });
  }

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


  //hide or show password
  $('.hide-password').on('click', function () {
    var $this = $(this),
      $password_field = $this.prev('input');

    ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
    ( 'Hide' == $this.text() ) ? $this.text('Show') : $this.text('Hide');
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
  });

}


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function () {
  return this.each(function () {
    // If this function exists...
    if (this.setSelectionRange) {
      // ... then use it (Doesn't work in IE)
      // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      var len = $(this).val().length * 2;
      this.setSelectionRange(len, len);
    } else {
      // ... otherwise replace the contents with itself
      // (Doesn't work in Google Chrome)
      $(this).val($(this).val());
    }
  });

};
