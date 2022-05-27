$(function(){ 
    $(window).scroll(function(){ 
        var winTop= $(window).scrollTop();
        if(winTop >= 30){ 
            $("body").addclass("sticky-header");
        }else{ 
            $("body").removeclass("sticky-header");
        }
    })
})