$(function () {  

    Route.getbrandtitle(function (info) {  
        console.log(info);
        $('.brand-category ul').html(template('tpl', info));
    })

    //点击分类列表跳转详情页
    $('.brand-category').on('click', 'li', function () { 
        var brandTitleId = $(this).data('brandTitleId');
        var brandTitle = $(this).find('h3').text();
        window.location.href = "brand.html?brandTitleId=" + brandTitleId + "&brandTitle=" + brandTitle;
    })

})