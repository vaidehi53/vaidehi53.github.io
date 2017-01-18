
$(document).ready(function(){
	//alert("sfdf");	
	$('.my-zoom-1').WMZoom();
	
	var viewportwidth = $(window).width();
	var viewportheight = $(window).height();
	$(".bg-main").width(viewportwidth);
	$(".bg-main").height(viewportheight);

	
	$('.bxslider').bxSlider();

	$(".cats ul").hide();
	$(".cats ul.ul1").show();
	$("select").on('change', function(){
		//debugger;
		var target = $(this).data('target');
		var show = $("option:selected").data('show');
		$(target).children().hide();
		$(show).show();
	});

	$(window).resize(function(){
		//alert("sd");
		var viewportwidth = $(window).width();
		var viewportheight = $(window).height();
		$(".bg-main").width(viewportwidth);
		$(".bg-main").height(viewportheight);
	});


});




 
