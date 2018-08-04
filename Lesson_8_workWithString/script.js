function stringWork() {
    var str = document.getElementById('head').innerHTML;

    // String();
    // new String();

    // var result = typeof new String(str);
    // var result = typeof String(str);
    // var result = str.charAt(12);
    // var result = str[13];
    // var result = str.charCodeAt(15);
    // var result = str.concat('Hello',',','world' );
    // var result = String.fromCharCode(97);
    // var result = String.fromCharCode(str.charCodeAt(17));
    // var result = str.indexOf('JavaScript');
    // var result = str.lastIndexOf('t');
    // var result = str.length;
    // var string = ['Привет', 'Москва' , 'Я жив'];
    // var result = str.localeCompare('а');
    // var result = string.sort(function (a,b) {
    //     return a.localeCompare(b)
    // });
    // var result = str.match(/\d+/);
    // var result = str.match(/\d+/g);
    // var result = str.replace(/\d+/,'hello');
    // var result = str.search(/\d+/);//RegExp
    // var result = str.slice(5,8);//RegExp
    // var result = str.slice( );//RegExp
    // var result = str.substr(0,7);//RegExp
    // var result = str.substring(0,7);//RegExp
    // var result = str.toLocaleLowerCase();//RegExp
    // var result = str.toLocaleUpperCase();//RegExp
    // var result = str.toLowerCase();//RegExp
    // var result = str.toUpperCase();//RegExp


    document.getElementById('result').innerHTML = result;
}
window.onload = function () {
    stringWork();
}