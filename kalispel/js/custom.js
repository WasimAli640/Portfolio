jQuery(document).ready(function() {
"use strict";
// Your custom js code goes here.
$(".close").click(function(){
$(".probootstrap-mobile-menu-active").removeClass("show"); 
}); 
});

function businessdir(overlay){
if(overlay)
{
$(".business-overlay").css({"top": 0, "z-index": 99,"position":"fixed"});

}
else
{
$(".business-overlay").css({"top": "-90px", "z-index": -1,"position":"absolute"});

}
}
$(".filter-button").click(function() {
$(".filter-button").removeClass('activeone');
$('.filter-button', this).addBack(this).addClass("activeone");
});
