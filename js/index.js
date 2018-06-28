$(function () {

    Route.getindexmenu(function (info) {
        console.log(info);
        $('.mmb-nav ul').html(template('tpl1', info));

        //点击更多 显示或隐藏下面的导航
        $('.mmb-nav ul li:nth-child(8)').on('click', function (e) {
            e.preventDefault();
            $(this).nextAll().toggle();
        })
    });

    Route.getmoneyctrl(function (info) {
        console.log(info);
        $('.recommend-item ul').html(template('tpl2', info));

        //改变图片的src
        $('.img img').each(function (i, e) {
            var src = $(e).attr('src').split('=');
            src = src[src.length - 1];
            $(e).attr('src', src);
        })
    })

})