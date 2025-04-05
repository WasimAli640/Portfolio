
	
$(document).ready(function(){
  $(".cmn-slider").owlCarousel({
	loop:false,
    autoplay:false,
    smartSpeed: 800,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
			dots:true,
			navText: ["<img src='images/arrow-left.svg'>","<img src='images/arrow-right.svg'>"]
        }
    }
  });  
 
});

$(document).ready(function(){
  $(".testimonial-slider").owlCarousel({
	loop:false,
    autoplay:true,
    smartSpeed: 800,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:true,
            nav:true,
			navText: ["<img src='images/arrow-left-purple.svg'>","<img src='images/arrow-right-purple.svg'>"]
        }
    }
  });  
 
});


$(document).ready(function(){
  $(".cmn-slider2").owlCarousel({
	loop:false,
    autoplay:true,
    smartSpeed: 800,
    responsiveClass:true,
    responsive:{
        1025:{
            items:4,
            dots:false,
            nav:true,
			navText: ["<img src='images/arrow-left-purple.svg'>","<img src='images/arrow-right-purple.svg'>"]
        },
		769:{
            items:3,
            dots:false,
            nav:true,
			navText: ["<img src='images/arrow-left-purple.svg'>","<img src='images/arrow-right-purple.svg'>"]
        },
		641:{
            items:2,
            dots:false,
            nav:true,
			navText: ["<img src='images/arrow-left-purple.svg'>","<img src='images/arrow-right-purple.svg'>"]
        },		
				0:{
            items:1,
            dots:true,
            nav:true,
			navText: ["<img src='images/arrow-left-purple.svg'>","<img src='images/arrow-right-purple.svg'>"]
        }
    }
  });  
 
});



$(document).ready(function(){
  $(".card-slider").owlCarousel({
	loop:false,
    autoplay:false,
      smartSpeed: 500,
    margin:40,
    dots:true,
    nav:true,
    navText: ["<img src='images/arrow-left.svg'>","<img src='images/arrow-right.svg'>"],
    responsiveClass:true,
    responsive : {
    0 : {
  
            items:1
            
        
    },
        768 : {
  
            items:3,
            
        
    }
   

        
    }
  });  
 
});
              

$(document).ready(function () { 
    if ($(window).width() <= 767) {
        $('.accordion-card').attr('id','accordionCard');
        }
$(window).on('resize', function(){
$('.accordion-card').attr('id','accordionCard');
});
});




