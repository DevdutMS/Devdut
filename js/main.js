$(".button-dm").click(function () {
  $(".side-menu").addClass("active");
});

$(".nav-menus-wrapper-close-button").click(function () {
  $(".side-menu").removeClass("active");
});

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $(".d-nav").next();
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if ($(window).width() > 200) {
        if (scroll_start > offset.top) {
          $(".d-nav").addClass("scrolled");
        } else {
          $(".d-nav").removeClass("scrolled");
        }
      }
    });
  }
});
