$(function () {  

    var obj = Tools.query(location.href);
    var imgNum;

    var couponId = obj.couponId;
    var couponTitle = decodeURI(obj.couponTitle);//对unidcode解码
    $('.mmb-header h3').text(couponTitle + "优惠券");
    obj = null;

    Route.getcouponproduct(couponId, function (info) {  
        console.log(info);
        $('.product-list ul').html(template('tpl', info));
    })


    //生成轮播图
    $('.product-list').on('click', '.img', clickImg);

   

    function clickImg() {  
        imgNum = $(this).data('couponproduct-id');
        var currentImg = $(this).children('img').attr('src');
        var prevImg = $(this).parents('li').prev().find('img').attr('src');
        if (!prevImg) {
            prevImg = $(this).parents('ul').children('li:last').find('img').attr('src');
        }
        var nextImg = $(this).parents('li').next().find('img').attr('src');
        if (!nextImg) {
            prevImg = $(this).parents('ul').children('li:first').find('img').attr('src');
        }
        // console.log(currentImg);
        // console.log(prevImg);
        // console.log(nextImg);
        $('.mask .prev img').attr('src', prevImg);
        $('.mask .current img').attr('src', currentImg);
        $('.mask .next img').attr('src', nextImg);

        $('.mask').show(500);

    }

    //轮播图事件
    
    $('.mask .arr-l').on('click', function () {
        var width = $('.wrapper').width();
        $('.mask ul').css('left', -width*2);
    })

    $('.mask .arr-r').on('click', function () {
        $('.mask ul').css('left', 0);
    })

    $('.mask ul').on('transitionend', function () {  
        console.log(11);
        $(this).css('transition', 'none');
        console.log($(this));
    })

    $('.mask').on('click', 'ul', function (e) {  
        e.stopPropagation();
    })

    $('.mask').on('click', '.arrow', function (e) {  
        e.stopPropagation(); 
    })

    $('.mask').on('click', function () {  
        $(this).hide();
    })

})