$('.enter').on('click', function(){
    $('.mobi-menu').addClass('active');
})

$('.mobi-menu i').on('click', function(){
    $('.mobi-menu').removeClass('active');
})

$('.slider-items').slick({
 
  dots: true
  
});

$('.slider-two').slick({
 
  dots: true
  
});