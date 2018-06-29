$(function () {

    var productId = Tools.query(location.href).productId;

    Route.getmoneyctrlproduct(productId, function (info) {
        console.log(info);
        $('.mmb-discountdetail').html(template('tpl', info));

        //截取地址
        var src = $('.product-desc img').each(function (i, e) {
            var src = $(e).attr('src').split('=http');
            if (src.indexOf('=http') == -1) {
                return;
            }
            src = src.split('=http');
            src = 'http' + src[src.length - 1];
            $(e).attr('src', src);
        })
    })

})