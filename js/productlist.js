$(function () {

    var categoryId = Tools.query(location.href).categoryId;

    //渲染面包屑导航的最后一个
    Route.getcategorybyid(categoryId, function (info) {
        $('.bread-crumbs .fl').append(template('tpl1', info));
    });

    //渲染商品列表
    rendedProductList(1);

    //点击上一页
    $('.product-list .prev').on('click', function () {
        var currentPage = $('#currentPage').val();
        if (currentPage <= 1) {
            return;
        }
        currentPage--;
        rendedProductList(currentPage);
    });

    //点击下一页
    $('.product-list .next').on('click', function () {
        var currentPage = $('#currentPage').val();
        var totalPage = $(this).data('totalpage');
        if (currentPage >= totalPage) {
            return;
        }
        currentPage++;
        rendedProductList(currentPage);
    });

    //select选项框改变时改变页面
    $('#currentPage').on('change', function () {
        var currentPage = $(this).val();
        rendedProductList(currentPage);
    })

    function rendedProductList(page) {
        Route.getproductlist(categoryId, page, function (info) {
            console.log(info);
            $('.product-list ul').html(template('tpl2', info));
            var totalpage = Math.ceil(info.totalCount / info.pagesize);
            $('.product-list .next').data('totalpage', totalpage);
            var pageHtml = "";
            for (var i = 1; i <= totalpage; i++) {
                pageHtml += '<option value="' + i + '">' + i + ' / ' + totalpage + '</option>'
            }
            $('#currentPage').html(pageHtml);
            $('#currentPage').val(page);
        })
    }

})