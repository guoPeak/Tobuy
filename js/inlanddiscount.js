$(function () {

    Route.getinlanddiscount(function (info) {
        console.log(info);
        $('.mmb-product ul').html(template('tpl', info));

    })

})