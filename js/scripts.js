$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");
    });

    $('.menu-toggler').click(function () {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".skill-per").each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({ animatedValue: 0 }).animate({ animatedValue: per }, {
            duration: 1000,
            step: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        });
    });

    $(window).on("load", function () {
        $(".loader-container").fadeOut(1000);
    });
});