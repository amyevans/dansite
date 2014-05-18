$(document).ready(function() {
	$(".research").on('click', 'a', function() {
		$.get('research.html', function(response) {
			$('#details').html(response).fadeIn();
	});
	$(".education").on('click', 'a', function() {
		$.ajax('education.html', {
			success: function(response) {
				$('#details').html(response).fadeIn();
			}
		});
	});
	$(".presentations").on('click', 'a', function() {
		$.ajax('presentations.html', {
			success: function(response) {
				$('#details').html(response).fadeIn();
			}
		});
	});	
});

