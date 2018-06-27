$(function () {  

    var productId = Tools.query(location.href).productId;

    Route.getmoneyctrlproduct(productId, function (info) {  
        console.log(info);
        $('.mmb-discountdetail').html(template('tpl', info));
    })

})