//= js-assets/functions
$(document).ready(function() {
    $('.search-block').on('click', '.search-btn', function(event) {
        event.preventDefault();
        $(this).parents().find('.search-line').toggleClass('active');
    });

    $('.js-slick').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });
});

