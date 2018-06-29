$(function () {  

    var brandTitleId = Tools.query(location.href).brandTitleId;
    var brandTitle = Tools.query(location.href).brandTitle;
    var firstImg;
    var firstTitle;
    
    //设置品牌的标题
    brandTitle = decodeURI(brandTitle).split('十')[0];
    $('.brand-list h2').text(brandTitle + "哪个牌子好");
    $('.product-list h2').text(brandTitle + "产品销量排行");
    $('.brand-comments h2').text(brandTitle + "最新评论");

    Route.getbrand(brandTitleId, function (info) {  
        console.log(info);
        $('.brand-list ul').html(template('tpl1', info));
    })

    Route.getbrandproductlist(brandTitleId, 8, function (info) {  
        console.log(info);
        $('.product-list ul').html(template('tpl2', info));
        firstImg = info.result[0].productImg;
        firstTitle = info.result[0].productName;
    })

    Route.getproductcom(brandTitleId, function (info) {  
        console.log(info);
        if (info.result.length == 0) {
            $('.brand-comments ul').html("暂无评论，赶快买来评论吧。。。。");
            return;
        }
        $('.brand-comments ul').html(template('tpl3', info));
        
        //设置图片和标题
        $('.product-info .name').text(firstTitle);
        $('.product-info .img').html(firstImg);
    })

})