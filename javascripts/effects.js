$(document).ready(function() {
	$('[data-typer-targets]').typer();
	$.typer.options.highlightSpeed = 100;
	$.typer.options.typeSpeed = 100;
	$.typer.options.clearDelay = 1500;

$('#support li').click(function(){
	$(this).toggleClass('show-answer');
});
// $('#questions li').toggleClass('show-answer');

});