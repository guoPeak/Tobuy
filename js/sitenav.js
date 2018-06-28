$(function () {  

    Route.getsitenav(function (info) {  
        console.log(info);
        $('.mall-guide ul').html(template('tpl', info));
    })

})