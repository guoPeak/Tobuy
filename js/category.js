$(function () {

    Route.getcategorytitle(function (info) {
        // console.log(info);
        $('.category>ul').html(template('tpl1', info));

        //渲染二级列表
        $('.title').each(function () {
            var id = $(this).data('id');
            var that = this;
            Route.getcategory(id, function (info) {
                console.log(info);
                $(that).next().html(template('tpl2', info));
            });
        })
    });

    $('.category').on('click', ' .title', function () {
        $(this).next().stop().slideToggle().parent().siblings().children('.content').stop().slideUp();
    });

});