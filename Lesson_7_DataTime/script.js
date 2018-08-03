//Date - отвечает за работу с датой и временем, отсчет идет с 01.01.1970 00:00
var date = new Date();//Первый параметр - кол-во милисекунд с начала отсчета, либо строковые/числовые значения
//var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] ;
//alert(date.getDate());
//alert(days[date.getDay()]);
//alert(date.getFullYear());
//alert(date.getHours());
//alert(date.getMilliseconds());
//alert(date.getMinutes());
// var month =['','','','','','','','Avg','',''];
//alert(month[date.getMonth()]);
//alert(date.getSeconds());
//alert(date.getTime());
//alert(date.getTimezoneOffset());

//date.setDate(10);
//date.setFullYear(2007);
//date.setHours(10);
//date.setMilliseconds(10);
//date.setMinutes(10);
//date.setMonth(10);
//date.setTime(10);


//UTC - работа с универсальным временем

//console.log(date.toDateString());
//console.log(date.toUTCString());
//console.log(date.toJSON());
//console.log(date.toLocaleDateString());
//console.log(date.toLocaleTimeString());
//console.log(date.toTimeString());
//console.log(Date.now());

// function displayTime() {
//     var now = new Date();
//     var div = document.getElementById("clock");
//     div.innerHTML = now.toLocaleString();
//     setTimeout(displayTime,1000);
// }
function displayTime2() {
    var now = new Date();
    var div = document.getElementById("clock");
    var sDate = new Date(2018,11,31);
    var timer = sDate.getTime() - now.getTime();
    var days = parseInt( timer/(24*60*60*1000));
    var house = parseInt( timer/(60*60*1000))%24;
    var minites  = parseInt( timer/(60*1000))%60;
    var seconds  = parseInt( timer/(1000))%60;

    div.innerHTML = days + ':' + house + ':' + minites + ':' + seconds ;
    setTimeout(displayTime2,1000);
}
window.onload = displayTime2;