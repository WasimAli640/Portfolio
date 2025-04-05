const lenis = new Lenis({
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  lerp: .05,
  wheelMultiplier: 1.5,
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

lenis.stop();

 $( window ).on( "load", function() {

    lenis.start();

      

      var menuBtn =  $(".menu-button"),
      menu = $(".main-nav-list")
      header =  $(".header");

    menuBtn.click(function(){
          $(this).toggleClass("show");
          menu.toggleClass("show");
    })
      $(document).click(function(e){
         var opened =  menu.hasClass("show");
        if(!$(e.target).is(".menu-button")){
          $(".menu-button").removeClass("show");
            menu.removeClass("show");
        }
      })

      $(this).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 0 ){
          header.addClass("sticky");
        }else {
          header.removeClass("sticky");
        }
      })

  }); 

  jarallax(document.querySelectorAll('.parallax-active'), {
    speed: .8,
  });

// Add a class on every section while section on the view port.
function reveal() {
    var reveals = document.querySelectorAll("section");
    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
    //   var elementVisible = 300;
      if (elementTop <  windowHeight/2) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
    }
  }


window.addEventListener("scroll", reveal);



