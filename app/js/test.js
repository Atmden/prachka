function worker() {
    var settings_usdt = {
        "url": "https://garantex.io/api/v2/depth?market=usdtrub",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Cookie": "_peatio_session=3290eebb3174feb8e748d57021099c29; lang=ru"
        },
    };
    var settings_btc = {
        "url": "https://garantex.io/api/v2/depth?market=btcrub",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Cookie": "_peatio_session=3290eebb3174feb8e748d57021099c29; lang=ru"
        },
    };
    var price = 0;
    $.ajax(settings_usdt).done(function (response) {
        price = response['asks'][0].price;

        var percentage_black = 11.0;
        var percentage_red = 13.0;
        var percentage_lgot = 15.3;
        var percentage_usdt = 0.8;

        black = Number(price) + Number(price * (percentage_black / 100));
        red = Number(price) + Number(price * (percentage_red / 100));
        lgot = Number(price) + Number(price * (percentage_lgot / 100));

        usdt = Number(price) + Number(price * (percentage_usdt / 100));

        $('#course_black').text(black.toFixed(2));
        $('#course_red').text(red.toFixed(2));
        $('#course_usdt').text(usdt.toFixed(2));

        $.ajax(settings_btc).done(function (response) {
            var price_btc = response['asks'][0].price;

            var percentage_minus = 10;

            var pp = price_btc / price;

            btc = Number(pp) - Number(pp * (percentage_minus / 100));

            $('#course_btc').text(btc.toFixed(2));

        });
    });

}

$(function () {
    worker();
});