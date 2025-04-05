 
$(window).scroll(function(){
  if ($(window).scrollTop() >= 200) {
    $('body').addClass('header-fixed');
   }
   else {
    $('body').removeClass('header-fixed');
   }
});


$('.scrolldown a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top-120, 
    },
   500,
    'linear'
  )
});










$(document).ready(function(){	
setTimeout(function() {
    $('#loading').fadeOut('slow');
}, 300); // <-- time in milliseconds
});



$(document).ready(function(){
  $(".listing-box a.cart-img").click(function(){
    $("body").addClass("show-cart-header");
  });
    $("a.cart-btn-ico").click(function(){
    $("body").addClass("show-cart-header");
  });
});



$('.listing-box a.cart-img').click(function() {
    $('#output').html(function(i, val) { return val*1+1 });
});
$('a.cart-btn-ico').click(function() {
    $('#output').html(function(i, val) { return val*1+1 });
});



$('.remove-button').on('click', function(){
    $(this).closest(".cart .wine-listing .border-bottom").fadeOut();
});








	