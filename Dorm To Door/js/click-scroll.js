var sectionArray = [1, 2, 3, 4, 6, 7];


$.each(sectionArray, function (index, value) {
    $(document).scroll(function () {
        var targetSection = $('#' + 'section_' + value);
        var locationsSection = $('#locations-page'); // Changed to direct ID reference

        if (targetSection.length || locationsSection.length) {
            var offsetSection = (targetSection.length ? targetSection : locationsSection).offset().top - 83;
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;

            if (docScroll1 >= offsetSection) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
            }
        }
    });

    $('.click-scroll').eq(index).click(function (e) {
        e.preventDefault();
        var targetSection = $('#' + 'section_' + value);
        var locationsSection = $('#locations-page');

        if (value === "locations-page") {
            $('html, body').animate({
                'scrollTop': locationsSection.offset().top - 83
            }, 300);
        } else if (targetSection.length) {
            $('html, body').animate({
                'scrollTop': targetSection.offset().top - 83
            }, 300);
        }
    });
});

