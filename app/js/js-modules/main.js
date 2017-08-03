//= js-assets/functions
$(document).ready(function() {
    $('.search-block').on('click', '.search-btn', function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('active');
    });

    $('.toggle-btn').on('click', function(event) {
        event.preventDefault();
        $(this).parents().find('.header-nav').toggleClass('active');
    });

    var clickOutsideArgs = {
        elementRemoveClass: $('.search-block, .header-nav'),
        elementToHide: $('.search-block, .toggle-btn'),
        elementToPreserve: $('.search-block, .header-nav'),
    }

    clickOutside(clickOutsideArgs);


    $('.js-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        }]
    });

    $('.top-btn').on('click', function(event) {
        $('html, body').animate({ scrollTop: 0 }, 900)
    });

    var scrollToElementArgs = {
        links: '.header-nav__link',
    };

    scrollToElement(scrollToElementArgs);
});