// scrollToElement
function scrollToElement(args) {
    $(args.links).on('click', function(event) {
    	event.preventDefault();
    	var href = $(this).attr('href').slice(1);
    	var sectionElement = $('#' + href);
    	
    	if($(sectionElement).length){
    		$('html, body').animate({
    			scrollTop: sectionElement.offset().top
    		})
    	}
    });
}
// END:scrollToElement
