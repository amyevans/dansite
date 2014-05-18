$(document).ready(function() {
	$(".research").on('click', 'a', function() {
		$.get('research.html', function(response) {
			$('#details').html(response).fadeIn();
	});
	$(".education").on('click', 'a', function() {
		$.get('education.html', function(response) {
			$('#details').html(response).fadeIn();
	});
	$(".presentations").on('click', 'a', function() {
		$.get('presentations.html', function(response) {
			$('#details').html(response).fadeIn();
	});
});

