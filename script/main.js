$(function () {

    //==================== inview START ===========================
    $('.right-fade, .left-fade').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('fade-in');
        } else {
            $(this).removeClass('fade-in');
        }
    });

    $('.service-item').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('inview-item');
        } else {
            $(this).removeClass('inview-item');
        }
    });
//======================== inview END =============================
//======================== menu START =============================
    $('.btn-menu').click(function () {
        $('.sp_nav').toggleClass('open-menu');
        if ($('.sp_nav').hasClass('open-menu')) {
            $(this).text('閉じる');
        } else {
            $(this).text('メニュー');
        }
    });
//======================== menu END =============================
});
