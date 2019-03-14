$(function(){
	$('.carousel').carousel();
	$(".didLogin").hide();
	$(".toTop").on("click",function(){
		$('body,html').animate({scrollTop:0},280);
        return false;
	});
})
