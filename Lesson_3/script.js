// Простейшие условия
/*
var a=10;
var b=20;
if (a > 10) {
    alert(Hello);
}
*/
// Даноое условие не сработает , так как 10 !> 10
/*
var a=10;
var b=20;
if (a > 9) {
    alert(Hello);
}
*/
// Даноое условие сработает , так как 10 > 9

// Integer, +- Infinity, 'string' => TRUE
// +-0, NULL, NaN,Undefined => FALSE

/*
if(){
    c=a+b;
    alert(c);
}elseif(){
    if(){}
    c=a-b;
    alert(c);

}else(){
    c=a/b;
    alert(c);
}
 */

//Инструкция switch - это условная инструкция, которая позволяет  проверять некое выражение и выполнять действие
/*
    switch(выражение){
    case var 1:инструкция
    break;

    case var 2:инструкция
    break;

    case var 3:инструкция
    break;

    default:
    инструкция
    break;
    }
 */

/*Инструкции циклов:
    while(выражение)
    {инструкция}

    do {инструкция}
        while(выражение);

    for(выражение)
        инструкция;
*/
/*
var str = '<table border="1px" width="30%">';
for(var i=1; i<10; i++){
    str += '<tr>';
        for(var j=1; j<10; j++){
            str += '<td>';
            str += i*j;
            str += '</td>'
        }
    str += '</tr>';
}
str += '</table>';
 */
/*
var el = document.getElementById('karkas');
el.innerHTML = el.innerHTML + str;
 */
/**
 * TODO В уроке он демонстрирует что else if пишется раздельно, но при этом на табличке, которую он показывает в уроке, показано, что пишется слитно
 **/