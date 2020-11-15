$(document).ready(function()
{
	$('.main-cont .main-jum .jumbotron').fadeIn(1700)  ;
	$(".spinner").hide() ;
	$(".navbar #close-menu-toggle").hide() ;
	$(".navbar #menu-toggle").click(function()
	{
		$(".sidebar").animate({
			left : '0'
		}) ;
		$(this).hide(500) ;
		$('.navbar #close-menu-toggle').show(500) ;
	}) ;
	$(".navbar #close-menu-toggle").click(function()
	{
		$(".sidebar").animate({
			left : '-100%'
		}) ;
		$(this).hide(1000) ;
		$('.navbar #menu-toggle').show(500) ;
	}) ;
	$(".navbar-1 #close-menu-toggle-1").hide() ;
	$(".navbar-1 #menu-toggle-1").click(function()
	{
		$(".sidebar").animate({
			left : '0'
		}) ;
		$(this).hide(500) ;
		$('.navbar-1 #close-menu-toggle-1').show(500) ;
	}) ;
	$(".navbar-1 #close-menu-toggle-1").click(function()
	{
		$(".sidebar").animate({
			left : '-100%'
		}) ;
		$(this).hide(500) ;
		$('.navbar-1 #menu-toggle-1').show(500) ;
	}) ;
})
$(window).scroll(function()
{
	var sc = $(window).scrollTop() ;
	if(sc >= 200)
	{
		$('.up').fadeIn(1000) ;
		$(".navbar").fadeOut(1000) ;
		$(".navbar-1").css("visibility" , "visible") ;
		$(".navbar").css("visibility" , "visible") ;
		$(".navbar-1 .navbar-brand .navbar-logo .logo").attr("src","logo.png") ;
		$(".navbar-1 .navbar-brand .brand-name").fadeIn(1000)
	} else {
		$('.up').fadeOut() ;
		$(".navbar").fadeIn(1000) ;
		$(".navbar-1").css("visibility" , "hidden") ;
		$(".navbar-1").css("visibility" , "hidden") ;
		$(".navbar-1 .navbar-brand .brand-name").fadeOut(1000)
	}
}) ;