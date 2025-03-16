// Custom JavaScript Document

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


//For Navbar Start

$(document).ready(function(){


  var datepickerCheck = $('input').hasClass('form__field');
        // alert(datepickerCheck);


        if (datepickerCheck) {


          $('.form__field').attr("autocomplete", "off");

          $('.date-sty-1').datepicker({
            format: 'dd MM yyyy'
          });

            //$('[data-provide="datepicker"]').datepicker({
            // format: 'MM yyyy'
            //});
          }


          
          $(function () {
            $('[data-toggle="tooltip"]').tooltip({placement: "bottom"});
          })
          $("#sidebar-toggle").click(function(){
            var flag =  $(this).hasClass('active');
            $(".left-navigations").removeClass("open");
            $("#menu-toggle").removeClass("active");
            $(".sidebar").toggleClass("open");
            $("#sidebar-toggle").toggleClass("active");

            if(flag == true) {
//      $("#sidebar-toggle img").attr("src","images/icons/filter.svg");

}
else  if(flag == false) {
//      $("#sidebar-toggle img").attr("src","images/icons/icon-cross-grey.svg");

}
});


          $("#menu-toggle").click(function(){
           var flag =  $(this).hasClass('active');
           $(".sidebar").removeClass("open");
           $("#sidebar-toggle").removeClass("active");
           $(".left-navigations").toggleClass("open");
           $("#menu-toggle").toggleClass("active");
//                 $(".lg-overlay").toggleClass("sidebar-overlay");
//            $("body").toggleClass("modal-open");
if(flag == false) {
//      $("#sidebar-toggle img").attr("src","images/icons/filter.svg");

}
else if(flag == true) {
//      $("#sidebar-toggle img").attr("src","images/icons/icon-cross-grey.svg");
}
});





          $("#Range-slider-low-and-high-tracks").slider({
            min: 0,
            max: 10,
            value: [3, 6],
            labelledby: ['ex18-label-2a', 'ex18-label-2b']
          });


        });


//For Navbar End



$('.progress .progress-bar').css("max-width",
  function() {
    return $(this).attr("aria-valuenow") + "%";
  }
  )

$(document).ready(function() {

  var DataTableCheck = $('table').hasClass('table');
       // alert(DataTableCheck);

       if (DataTableCheck) {


        $('#JobsApplied').DataTable({
          "scrollX": true,
          "paging":   false,
          "filter":   false,
          "ordering": true,
          "info":     false
        });
        $('#YourReferrals').DataTable({
          "scrollX": true,
          "paging":   false,
          "filter":   false,
          "ordering": false,
          "info":     false
        });
        $('#CandidatesReferred').DataTable({
          "scrollX": true,
          "paging":   false,
          "filter":   false,
          "ordering": false,
          "info":     false
        });
            // $('#JobsApplied').parent().parent().addClass('scroll-here');
            // $('#YourReferrals').parent().parent().addClass('scroll-here');
            $('#ApplicationStatusTable').DataTable({
              "scrollX": true,
              "paging":   true,
              "filter":   false,
              "ordering": false,
              "info":     false
            });
            $('#account-manager-employer-profile').DataTable({
              "scrollX": true,
              "paging":   true,
              "filter":   false,
              "ordering": false,
              "info":     false
            });

          }

        });



$(document).ready(function() {


  $(window).scroll(function(){

    var sticky = $('.stick-top'),
    scroll = $(window).scrollTop();
                 // console.log(scroll);
                 if (scroll >= 560) sticky.addClass('fixed');
                 else sticky.removeClass('fixed');
               });


});

