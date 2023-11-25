(function($) {
    "user strict";
    // Preloader Js
    $(window).on('load', function() {
        $('.preloader').fadeOut(1000);
        var img = $('.bg_img');
        img.css('background-image', function() {
            var bg = ('url(' + $(this).data('background') + ')');
            return bg;
        });
    });
    $(document).ready(function() {

        //Header Bar
        $('.header-bar').on('click', function() {
            $(this).toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.menu').toggleClass('active');
        })
        //Header Bar
        $('.overlay').on('click', function() {
            $(this).removeClass('active');
            $('.header-bar').removeClass('active');
            $('.menu').removeClass('active');
        })
        // Header Sticky Herevar prevScrollpos = window.pageYOffset;
        var scrollPosition = window.scrollY;
        if (scrollPosition >= 1) {
            $(".header-section").addClass('active');
        }
        var fixed_top_three = $(".header-section");
        $(window).on('scroll', function() {
            if ($(this).scrollTop() < 1) {
                fixed_top_three.removeClass("active");
            } else {
                fixed_top_three.addClass("active");
            }
        });
        //Tab Section
        $('.tab ul.tab-menu li').on('click', function(g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();
            tab.find('li').siblings('li').removeClass('active');
            $(this).closest('li').addClass('active');
            tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').fadeOut();
            tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').fadeIn();
            g.preventDefault();
        });
        //Odometer
        $(".counter-item").each(function() {
            $(this).isInViewport(function(status) {
                if (status === "entered") {
                    for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute("data-odometer-final");
                    }
                }
            });
        });
    });
})(jQuery);