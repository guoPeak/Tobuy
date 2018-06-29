$(function () {  


    Route.getgsshop(function (info) {  
        // console.log(info);
        $('#shop').html(template('tpl1', info));
    })

    Route.getgsshoparea(function (info) {  
        // console.log(info);
        $('#area').html(template('tpl2', info));
    })


    //页面加载默认加载
    renderProduct(0,0);

    $('.mmb-comfrom li').on('click', function () {  
        $(this).siblings().children('.content').hide();
        $(this).children('.content').stop().slideToggle();
    })

    //注册选项框事件,选择重新渲染页面
    $('.mmb-comfrom li').on('click', '.content div', function () {
        var shopid = $(this).data('shopid');
        var areaid = $(this).data('areaid');
        
        $(this).addClass('now').siblings().removeClass('now');  
        var txt = $(this).children('.slname').text();
        var parent = $(this).parents('li').find('.name')
        parent.text(txt);
        if (shopid == 'undefined') {
            parent.data('shopid', shopid);
        } else {
            parent.data('areaid', areaid);
        }
    
        if (!shopid) {
            shopid = $('#shop .name').data('shopid');
        }
        if (!areaid) {
            areaid = $('#area .name').data('areaid');
        }
        
        renderProduct(shopid, areaid);
    })



    function renderProduct(shopid,areaid) {  
        Route.getgsproduct(shopid, areaid, function (info) {  
            console.log(info);
            $('.product-list ul').html(template('tpl3', info));
        })
    }
})