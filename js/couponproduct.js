$(function () {

    var obj = Tools.query(location.href);
    var $ul = $('.mask ul');
    var $mask = $('.mask');
    var $imgUl = $('.mask .wrapper ul');
    var imgArr = [];
    var width = $('.wrapper').width();
    var imgNum = 1;

    var couponId = obj.couponId;
    var couponTitle = decodeURI(obj.couponTitle);//对unidcode解码
    $('.mmb-header h3').text(couponTitle + "优惠券");
    obj = null;

    Route.getcouponproduct(couponId, function (info) {
        console.log(info);
        $('.product-list ul').html(template('tpl', info));

        for (var i = 0; i < info.result.length; i++) {
            imgArr.push(info.result[i].couponProductImg);
        }
        $imgUl.width(width * (imgArr.length + 2));
    })


    //生成轮播图
    $('.product-list').on('click', '.img', function () {
        $mask.show();
        imgNum = $(this).data('couponproductId') + 1;
        $imgUl.html(template('tpl2', { imgArr: imgArr }));
        $ul.css('left', -width * imgNum);
    });


    //轮播图事件

    window.onresize = function () {
        width = $('.wrapper').width();
        $imgUl.width(width * imgArr.length);
    }

    $('.mask .arr-r').on('click', function () {
        $ul.css('transition', 'all 1s');
        imgNum++;
        $ul.css('left', -width * imgNum);

    })

    $('.mask .arr-l').on('click', function () {
        $ul.css('transition', 'all 0.5s');
        imgNum--;
        $ul.css('left', -width * imgNum);
    })

    $ul.on('transitionend', function () {

        //瞬间切换图片
        if (imgNum >= imgArr.length + 1) {
            imgNum = 1;
        }
        if (imgNum <= 0) {
            imgNum = imgArr.length;
        }

        this.style.transition = 'none';
        this.style.left = -width * imgNum + 'px';
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