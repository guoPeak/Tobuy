$(function () {  

    var obj = Tools.query(location.href);
    var imgNum;
    var $ul = $('.mask ul');
    var $mask = $('.mask');

    var couponId = obj.couponId;
    var couponTitle = decodeURI(obj.couponTitle);//对unidcode解码
    $('.mmb-header h3').text(couponTitle + "优惠券");
    obj = null;

    Route.getcouponproduct(couponId, function (info) {  
        console.log(info);
        $('.product-list ul').html(template('tpl', info));
    })


    //生成轮播图
    $('.product-list').on('click', '.img', renderImg);
    $('.product-list .img').eq(imgNum).on('click', renderImg);
   

    function renderImg() {  
        imgNum = $(this).data('couponproduct-id');
        // console.log(imgNum);
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

        $mask.show();

        $ul.css('transition', 'all 1s');
    }

    //轮播图事件
    var width;
    $('.mask .arr-r').on('click', function () {
        width = $('.wrapper').width();
        $ul.css('left', -width*2);
        imgNum++;
        
    })

    $('.mask .arr-l').on('click', function () {
        $ul.css('left', 0);
        imgNum--;

    })

    $ul.on('transitionend', function () {  
        $(this).css('transition', 'none');
        $(this).css('left', -width);
    
        $('.product-list .img').eq(imgNum).trigger('click');
    })

    // 点击mask周边隐藏mask
    $mask.on('click', 'ul', function (e) {  
        e.stopPropagation();
    })

    $mask.on('click', '.arrow', function (e) {  
        e.stopPropagation(); 
    })

    $mask.on('click', function () {  
        $(this).hide();
    })

})