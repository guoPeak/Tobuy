$(function () {  

    var productId = Tools.query(location.href).productId;


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