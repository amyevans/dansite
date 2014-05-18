$(document).ready(function() {
	$(".research").on('click', 'a', function() {
		$.ajax('research.html', {
			success: function(response) {
				$('#details').html(response).fadeIn();
			}
		});
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


/*
	$(".education").on('click', 'a', function() {
		$('.research').last().hide();
		$('.presentations').last().hide();
		$(this).closest('.container').find('.education').last().fadeIn();
	});
	$(".presentations").on('click', 'a', function() {
		// event.preventDefault();
		$('.research').last().hide();
		$('.education').last().hide();
		$(this).closest('.container').find('.presentations').last().fadeIn();
	});
*/
});

