window.onload=function(){$(window).width()>767&&$("#welcome-modal").modal(),$(".forgot-pass-btn").click(function(){$(".forgot-pass-form").removeClass("closed"),$(".sign-in-form").addClass("closed")}),$(".back-to-login").click(function(){$(".forgot-pass-form").addClass("closed"),$(".sign-in-form").removeClass("closed")}),$(".sidebar-nav-wrap, .shadow-box").mouseenter(function(){$(this).addClass("mouse_over"),$(".content-with-sidebar").addClass("sidebar-opened")});var a;$(".sidebar-nav-wrap, .shadow-box").mouseleave(function(){var b=$(this);a=setTimeout(function(){b.removeClass("mouse_over"),0==$(".mouse_over").length&&$(".content-with-sidebar").removeClass("sidebar-opened")},20)}),"undefined"!=typeof jQuery.fn.pongstgrm&&$("#instagram-feed").pongstgrm({accessId:"2121083481",accessToken:"2121083481.1677ed0.8737974840cf46309a44befee7cfdd38",show:"specific_user",userId:"2067313449",count:6,column:"col-xs-12 col-sm-4 col-md-4 col-lg-4",button:"btn btn-default",comments:!1,effects:"scaling"}),$(".maps").click(function(){$(".maps iframe").css("pointer-events","auto")}),$(".maps").mouseleave(function(){$(".maps iframe").css("pointer-events","none")}),$(".wishlist-btn").click(function(){$(this).toggleClass("check")}),$(".completed-btn").click(function(){$(this).toggleClass("check")}),$(".hide-password").on("click",function(){var a=$(this),b=a.prev("input");"password"==b.attr("type")?b.attr("type","text"):b.attr("type","password"),a.text("Hide"==a.text()?"Show":"Hide"),b.putCursorAtEnd()})},jQuery.fn.putCursorAtEnd=function(){return this.each(function(){if(this.setSelectionRange){var a=2*$(this).val().length;this.setSelectionRange(a,a)}else $(this).val($(this).val())})};