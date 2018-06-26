$(function () {

    Route.getcategorytitle(function (info) {
        // console.log(info);
        $('.category>ul').html(template('tpl1', info));

        $('.category').on('click', ' .title', function () {
            var that = this;
            var id = $(this).data('id');

            Route.getcategory(id, function (info) {
                console.log(info);
                $(that).next().html(template('tpl2', info));
                $(that).next().stop().slideToggle();
                $(that).parent().siblings().children('.content').slideUp();
            });

        });
    });

});