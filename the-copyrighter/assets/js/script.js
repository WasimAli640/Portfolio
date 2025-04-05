var header = document.querySelector(".header");
window.addEventListener('scroll', function(){
    var scrolltop = window.pageYOffset || document.documentElement.scrollTop;
    var overlay =  this.document.querySelector(".hero-banner .tc-overlay"),
        overlay2 =   this.document.querySelector(".about-section .tc-overlay")
    if (scrolltop > 10) {
        overlay.style.transform = 'translateY(' + scrolltop/4 + 'px)';
        overlay2.style.transform = 'translateY(' + scrolltop/10 + 'px)';
        header.classList.add("sticky");
    } 
     else {
        header.classList.remove("sticky");
    }

  })


$(window).on('load', function(){
    var menuBtn =  $(".menu-btn"),
    navbar = $(".cs-lg-navbar");

    menuBtn.click(function(){
        navbar.slideToggle('slow');
        menuBtn.toggleClass("show")
    })

})  

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp:0.08,
  wheelMultiplier: 1.4,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
});


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var options = {
    strings: ['EASY TO READ', 'BEAUTIFUL', 'UNIQUE'],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
    loopCount: Infinity,
  };
  
var typed = new Typed('.type-text', options);

