
// For Tabs Open In Move Meter
$(function(){

        var progBar = $(".progress-bar");
        var mmTab = $(".non-gen-tab"); 
        var meterMain = $(".meter-banner-main");
        var bgColorAll = mmTab.attr("data-color")
        // For change the color of movemeter
        mmTab.click(function(){
            var bgColor = $(this).attr('data-color');
                meterMain.removeClass('bg-blue bg-skblue1 bg-skblue2 bg-skblue3 bg-skblue4');
                meterMain.addClass(bgColor);
                console.log(meterMain)
                circle.addClass("chng-col");
                meterBtm.addClass("bg-btm");
    
                // For reset animation of progress bar
                progBar.removeClass("active");
        })
    
        var GenTab = $(".gen-tab");
        var meterBtm = $(".meter-bottom");
        GenTab.click(function(){
            meterMain.removeClass("bg-skblue");
            meterMain.removeClass('bg-blue bg-skblue1 bg-skblue2 bg-skblue3 bg-skblue4');
            circle.removeClass("chng-col");
            meterBtm.removeClass("bg-btm");
            meterMain.addClass("bg-blue");
            // For animate progress bar
            progBar.addClass("active");
            
            // recall chart
            chart.reset();
            chart.update();
            // For reset numbers of movemeter
            var count = document.getElementById("moveScore");
            var upto = 0;
            // Meter Count
            let counts = setInterval(updated, 40);
            function updated() {
    
                count.innerHTML = ++upto;
    
                if(count.innerHTML == datapoints) {
                    clearInterval(counts);
                } 
            }
        })
    
        var tabBtn = $(".tab-btn");
        var tabContent = $(".meter-tab-content");
        tabBtn.click(function(){
            var matchTab = $(this).attr('aria-details');
            tabContent.slideUp();
            $('#'+matchTab).slideDown();
            tabBtn.removeClass("active");
            $(this).addClass("active");
        })
        
        var subBtn = $("#mm-calculate");
        var crntBox = $(".meter-box1");
        var nxtBox = $(".meter-box2");
        var backBtn = $("#backBtn");
        var circle = $(".circle_150");
        var logo = $(".meter-logo");
        var meterTabs = $(".meter-tabs-content");
        nxtBox.hide();
        subBtn.click(function(){
            crntBox.fadeOut();
            nxtBox.delay(400).slideDown();
            nxtBox.addClass("show");
            logo.addClass("sm");
            // For animate progress bar
            progBar.addClass("active");
            tabContent.hide();
            $(".meter-tab-content:first").show();
            tabBtn.removeClass("active");
            $(".tab-btn:first").addClass("active");
            meterTabs.delay(400).fadeIn();
        })
    
        backBtn.click(function(){
            nxtBox.fadeOut();
            nxtBox.removeClass("show");
            crntBox.delay(400).slideDown();
            // for change width of logo
            logo.removeClass("sm");
            // For Reset the color of move meter
            meterMain.removeClass("bg-skblue");
            meterMain.addClass("bg-blue");
            // For reset the color of circle
            circle.removeClass("chng-col");
            // For reset animate progress bar
            progBar.removeClass("active");
            meterTabs.fadeOut();
            meterBtm.removeClass("bg-btm");
            meterMain.removeClass('bg-blue bg-skblue1 bg-skblue2 bg-skblue3 bg-skblue4');
            meterMain.addClass("bg-blue");
        })
    
        var inputCity1 = $("#city1:text");
        var inputCity2 = $("#city2:text");
    
        var fillDiv1 = $("#firstCity");
        var fillDiv2 = $("#secCity");
    
        subBtn.click(function(){
            fillDiv1.val(inputCity1.val());
            fillDiv2.val(inputCity2.val());
        })
})

$(".pricing-box").mCustomScrollbar({
  theme:"light-thick",
  axis:"y",
  scrollInertia:400,
  
});









