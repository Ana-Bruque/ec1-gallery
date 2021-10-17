console.log('it works!');


$(document).ready(function(){
  $('.slider').bxSlider({
    auto: true,
  autoControls: true,
  pager: true,
  });

  $('.search-button').on('click', function (e) {
    e.preventDefault();
    $('.search.expand-right').toggleClass("open");
  });

  $('.search-button').on('keypress', function (e) {
    e.preventDefault();
    $('.search.expand-right').toggleClass("open");
  });

  $('.icon-menu').on('click', function (e) {
    e.preventDefault();
    $('.sliding-menu-content').toggleClass("open");
    $('.icon-menu').toggleClass("open");
  });

  $('.icon-menu').on('keypress', function (e) {
    e.preventDefault();
    $('sliding-menu-content').toggleClass("open");
    $('.icon-menu').toggleClass("open");
  });

  $(".artist-list li a").mouseover( function() { 
    var value=$(this).attr('data-src');
    $(".artist-image-holder img").attr("src", value);
})

  $(".artist-list li a").mouseout( function() {
    $( '.artist-image-holder img' ).attr("src","./IMAGES/artist1-thumb.jpeg");
  });

});




