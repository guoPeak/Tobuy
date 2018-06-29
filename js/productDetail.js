$(function () {  

    var productId = Tools.query(location.href).productId;
    var categoryId = Tools.query(location.href).categoryId;
    categoryId = decodeURI(categoryId);

    //面包屑分类第二个
    Route.getcategorybyid(categoryId, function (info) {  
        console.log(info);
        $('.bread-crumbs .category').text(info.result[0].category);
    })

    Route.getproduct(productId, function (info) {  
        console.log(info);
        $('.product-detail').html(template('tpl1', info));

        var productName = info.result[0].productName;
        
        $('.bread-crumbs .proName').text(productName);
    })
    
    Route.getproductcom(productId, function (info) {  
        console.log(info);
        $('.mmb-comments ul').html(template('comments', info));
    })
})