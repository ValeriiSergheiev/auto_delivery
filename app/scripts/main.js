$(document).ready(function(){
	$('nav a:first-child').focus();
	$('.receive').click(function(){
		$('.sub-menu').slideToggle('fast');
	});

	$('.maximize').click(function(){
		$('.form-sender').show('fast');
		$('.sender-min').hide('fast');
		return false;
	});

	$('.minimaze').click(function(){
		$('.form-sender').hide('fast');
		$('.sender-min').show('fast');
		return false;
	});

	$('.del').click(function(){
		$('.form-sender, .sender-min').remove();
	});

	/*$('.add').click(function(){
		$(".sender-min").clone().prependTo('.add');
	});*/


});