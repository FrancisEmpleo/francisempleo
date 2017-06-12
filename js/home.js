$(window).scroll(function() {
  if ($(document).scrollTop() > 100) { // $(window).height()
    $('nav').addClass('scroll-navbar');
  } else {
    $('nav').removeClass('scroll-navbar');
  }
});