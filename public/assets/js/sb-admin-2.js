(function ($) {
    "use strict"; // Start of use strict

    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $(".sidebar .collapse").collapse("hide");
        }
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $(".sidebar .collapse").collapse("hide");
        }

        // Toggle the side navigation when window is resized below 480px
        if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
            $("body").addClass("sidebar-toggled");
            $(".sidebar").addClass("toggled");
            $(".sidebar .collapse").collapse("hide");
        }
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $("body.fixed-nav .sidebar").on(
        "mousewheel DOMMouseScroll wheel",
        function (e) {
            if ($(window).width() > 768) {
                var e0 = e.originalEvent,
                    delta = e0.wheelDelta || -e0.detail;
                this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                e.preventDefault();
            }
        }
    );

    // Scroll to top button appear (cải thiện hiệu suất)
    $(window).on("scroll", function () {
        var scrollDistance = window.pageYOffset; // Sử dụng window.pageYOffset
        if (scrollDistance > 100) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing (tùy chỉnh tốc độ và hiệu ứng)
    $(document).on("click", "a.scroll-to-top", function (event) {
        $("html, body").animate(
            {
                // Sử dụng animate() thay vì stop().animate()
                scrollTop: 0, // Cuộn về đầu trang
            },
            800,
            "swing"
        ); // Tùy chỉnh tốc độ và hiệu ứng
        event.preventDefault();
    });
})(jQuery); // End of use strict
