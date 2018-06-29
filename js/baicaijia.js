$(function () {

    var myScroll;

    Route.getbaicaijiatitle(function (info) {
        // console.log(info);
        $('.bcj-nav ul').html(template('tpl1', info));
        var ulWidth = 0;
        $('.bcj-nav li').each(function () {
            ulWidth += $(this).innerWidth();
        })
        $('.bcj-nav ul').width(ulWidth + 1);

        myScroll = new IScroll('.bcj-nav', {
            scrollX: true,
            scrollY: false
        });

    })

    // 刚加载默认第一页
    render(0)

    function render(titleId) {
        Route.getbaicaijiaproduct(titleId, function (info) {
            console.log(info);
            $('.product-list ul').html(template('tpl2', info));
        })
    }

    //点击事件
    $('.bcj-nav').on('click', 'li', function () {
        var titleId = $(this).data('titleid');
        $(this).addClass('now').siblings().removeClass('now');

        render(titleId);

        //让点击的目标到最左
        myScroll.scrollToElement(this, 300);
    })

    //显示返回向上的箭头
    $(document).on('scroll', function () {
        if ($(document).scrollTop() >= 600) {
            $('.go-top').show();
        } else {
            $('.go-top').hide();
        }
    })

})