$(document).ready(function() {
	$('.close-about').click(function(){
		$('.about-full').fadeOut();
	});
	$('.about-preview').click(function(){
		$('.about-full').fadeIn();
	});
});