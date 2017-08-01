//= js-assets/functions
$(document).ready(function() {
	$('.search-block').on('click', '.search-btn', function(event) {
		event.preventDefault();
		$(this).parents().find('.search-line').toggleClass('active');
	});
});



