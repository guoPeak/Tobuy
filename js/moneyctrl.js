$(function () {  


    //渲染第一页 数据获取是第0页
    rendedProductList(0);

    //点击上一页
    $('.product-list .prev').on('click', function () {
        var currentPage = $('#currentPage').val();
        if (currentPage <= 1) {
            return;
        }
        currentPage--;
        rendedProductList(currentPage - 1);
    });

    //点击下一页
    $('.product-list .next').on('click', function () {
        var currentPage = $('#currentPage').val();
        var totalPage = $(this).data('totalpage');
        if (currentPage >= totalPage) {
            return;
        }
        currentPage++;
        rendedProductList(currentPage - 1);
    });

    //select选项框改变时改变页面
    $('#currentPage').on('change', function () {
        var currentPage = $(this).val();
        rendedProductList(currentPage - 1);
    })

    function rendedProductList(page) {
        Route.getmoneyctrl( page, function (info) {
            console.log(info);
            $('.product-list ul').html(template('tpl', info));
            var totalpage = Math.ceil(info.totalCount / info.pagesize);
            $('.product-list .next').data('totalpage', totalpage);
            var pageHtml = "";
            for (var i = 1; i <= totalpage; i++) {
                pageHtml += '<option value="' + i + '">' + i + ' / ' + totalpage + '</option>'
            }
            $('#currentPage').html(pageHtml);
            $('#currentPage').val(page + 1);
        })
    }

})