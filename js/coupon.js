$(function () {  

    Route.getcoupon(function (info) {  
        console.log(info);
        $('.mmb-coupon ul').html(template('tpl', info));
    })

})