$(document).ready(function() {
	$(".research").on('click', 'a', function() {
		$.get('research.html', function(response) {
			$('#details').html(response).fadeIn();
		});
	});
	$(".education").on('click', 'a', function() {
		$.get('education.html', function(response) {
			$('#details').html(response).fadeIn();
		});
	});
	$(".presentations").on('click', 'a', function() {
		$.get('presentations.html', function(response) {
			$('#details').html(response).fadeIn();
		});
	});
});


var details = {
  init: function() {
    $(".research").on('click', 'a', this.loadResearch);
    $(".education").on('click', 'a', this.loadEducation);
    $(".presentations").on('click', 'a', this.loadPresentations);
  },
  loadResearch: function() {
    $.ajax('research.html', {
          success: function(response) {
               $('#details').html(response).fadeIn();
          },
          error: function(request, errorType, errorMessage) {
               alert('Error: ' + errorType + ' with message: ' + errorMessage);
          },
          timeout: 3000,
          beforeSend: function() {
               $('#details').addClass('is-loading');
          },
          complete: function() {
               $('#details').removeClass('is-loading');
          }
    });
  },
  loadEducation: function() {
    $.ajax('education.html', {
          success: function(response) {
               $('#details').html(response).fadeIn();
          },
          error: function(request, errorType, errorMessage) {
               alert('Error: ' + errorType + ' with message: ' + errorMessage);
          },
          timeout: 3000,
          beforeSend: function() {
               $('#details').addClass('is-loading');
          },
          complete: function() {
               $('#details').removeClass('is-loading');
          }
    });
  },
  loadPresentations: function() {
    $.ajax('presentations.html', {
          success: function(response) {
               $('#details').html(response).fadeIn();
          },
          error: function(request, errorType, errorMessage) {
               alert('Error: ' + errorType + ' with message: ' + errorMessage);
          },
          timeout: 3000,
          beforeSend: function() {
               $('#details').addClass('is-loading');
          },
          complete: function() {
               $('#details').removeClass('is-loading');
          }
    });
  }  
};
$(document).ready(function() {
  details.init();
});

