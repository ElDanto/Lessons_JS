function standart() {
    var str = document.getElementById('head').innerHTML;
    var result;
    // result = Math.abs(-10);
    // result = Math.acos(-1);
    // result = Math.asin(-1);
    // result = Math.atan(-1);
    // result = Math.cos(60 * 0.1745);//Передаем радианы (градусы * 2p/360)
    // result = Math.sin(30 * (2 * Math.PI / 360));
    // result = Math.tan(45 * (2 * Math.PI / 360));


    // result = Math.ceil(1.5);
    // result = Math.floor(2.7);//Округляет до ближайшего меньшего

    // result = Math.E;//Математическая константа
    // result = Math.LN10;
    // result = Math.LN2;
    // result = Math.LOG10E;
    // result = Math.LOG2E;
    // result = Math.PI;
    //  result = Math.SQRT1_2;//1/sqpt(2);
    //  result = Math.SQRT2;//sqpt(2);


    // result = Math.exp(2);//Вычесляет выражение экспанента в степени x

    // result = Math.log(76);

    // result = Math.max(10,10000,23212,123,Infinity);
    // result = Math.min(10,10000,23212,123,Infinity);


    // result = Math.pow(10,2);//x^y
    // result = Math.sqrt(100);

    // result = Math.random();//0.0...1.0
    // result = Math.floor(Math.random()*100);

    // alert(Number.NaN);

    /*result = NaN == NaN;
      result = isNaN(result);*/

   // result = typeof Number('10');

    // result = Number.MAX_VALUE;
    // result = Number.MIN_VALUE;

    // result = Number.NEGATIVE_INFINITY;
    // result = Number.POSITIVE_INFINITY;

    // var numb = 10.5;
    // result = numb.toString();
    // result = numb.toLocaleString();
    // result = numb.toFixed(10);
    // result = numb.toPrecision(2);

    // result = parseFloat('123145567HelloWorld');
    result = parseInt('123145567.231HelloWorld');

    document.getElementById('result').innerHTML = result;
}
window.onload = function () {
    standart();
}