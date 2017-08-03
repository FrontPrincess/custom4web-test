//= js-assets/functions
$(document).ready(function() {
    $('.search-block').on('click', '.search-btn', function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('active');
    });

    var clickOutsideArgs = {
        elementRemoveClass: $('.search-block'),
        elementToHide: $('.search-line'),
        elementToPreserve: $('.search-block'),
    }

    clickOutside(clickOutsideArgs);


    $('.js-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });

    $('.top-btn').on('click', function(event) {
        $('html, body').animate({ scrollTop: 0 }, 900)
    });

    var scrollToElementArgs = {
        links: '.header-nav__link',
        // offset: 100,
        // speed: 1000
    };

    scrollToElement(scrollToElementArgs);
});