$(window).resize(function(){$(".navbar-collapse").css({maxHeight:$(window).height()-$(".navbar-header").height()+"px"})}),$(document).ready(function(){$(window).load(function(){$(".sticky").sticky({topSpacing:0})}),$(".navbar-nav>.dropdown").hover(function(){$(this).toggleClass("open")})}),$(document).ready(function(){new WOW({boxClass:"wow",animateClass:"animated",offset:100,mobile:!1}).init()}),$(document).ready(function(){$(window).stellar({horizontalScrolling:!1,responsive:!0})}),$(document).ready(function(){$("#work-carousel").owlCarousel({loop:!0,margin:0,nav:!1,responsive:{0:{items:1},600:{items:2},1e3:{items:4}}})}),$(document).ready(function(){$("#news-carousel").owlCarousel({items:2,itemsCustom:!1,itemsDesktop:[1199,2],itemsDesktopSmall:[980,2],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,startDragging:!0,autoPlay:4e3})}),$(document).ready(function(){$("#testi-carousel").owlCarousel({loop:!0,margin:0,nav:!1,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})}),$(document).ready(function(){$("#featured-work").owlCarousel({loop:!0,margin:0,nav:!1,responsive:{0:{items:1},600:{items:2},1e3:{items:4}}})}),jQuery(document).ready(function(e){e(".counter").counterUp({delay:10,time:800})}),$(document).ready(function(){$(".show-image").magnificPopup({type:"image"})}),$(document).ready(function(){$(".main-flex-slider,.testi-slide").flexslider({slideshowSpeed:5e3,directionNav:!1,animation:"fade"}),$(".testi-slide").flexslider({slideshowSpeed:5e3,directionNav:!1,animation:"fade",smoothHeight:!0})}),$(document).ready(function(){$("#clients-slider").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}})}),$(document).ready(function(){$("[data-toggle=popover]").popover(),$("[data-toggle=tooltip]").tooltip()}),$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".transparent-header").css("background","#252525"):$(".transparent-header").css("background","transparent")})}),function(){$(".top-search").on("click",function(){$(".search").fadeIn(500,function(){$(this).toggleClass("search-toggle")})}),$(".search-close").on("click",function(){$(".search").fadeOut(500,function(){$(this).removeClass("search-toggle")})})}(),$('.panel-ico a[data-toggle="collapse"]').on("click",function(){$(this).closest(".panel-heading").hasClass("active")?$(this).closest(".panel-heading").removeClass("active"):($('.panel-heading a[data-toggle="collapse"]').closest(".panel-heading").removeClass("active"),$(this).closest(".panel-heading").addClass("active"))});