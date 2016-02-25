$(window).load(function(){

	$(".search-wrap .dropdown-menu li a").click(function(){
	  	$(".search-wrap .dropdown-toggle").text($(this).text());
	});

})
