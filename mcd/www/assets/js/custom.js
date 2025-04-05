$(document).ready(function() {
  $('select').niceSelect();
  
});


  $( function() {
	  $('#datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});
   
  } );



$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
});

$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
});

function goBack() {
  window.history.back();
}
$(".search-close-img").click(function(){
  $('.collapse').removeClass('show');
});