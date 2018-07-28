/*
function имяФунции(параметр){
 //Код фунции
}
Вызов:
имяФункции(параметр);

function func(param1, param2){
    var a = param1 * param2;
    alert(a);
}
func(x,y)
 */
//Если мы не зададим передаваемое значение в return то он выведет Undefined
//Локальные переменые также доступны во вложенной фунции
/*
var c = 3;
function func(a,b){
    var result = a * b;
        function func2(2){
            return result * b * a * c;
        };
        return func2(2);
    return result;
}
document.write(func(10 , 30));
 */
/*
var func = (function foo(param1, param2){
    console.log(param1);
} (10 , 20))
*/
//Рекурсия
/*
//Создаем функцию вычисляющую факториал числа
function func(x){
    if(x <= 1){//Вместо знака <= можно использовать просто оператор сранения т.к. если значение будет равно 1 , то на этиом работа условия закончится (чисто мое мнение)
        return 1;
    }
    return x * func(x-1);
}
console.log( func(10) );
 */
//Если мы вызовем фунцию без задавания переменных, она выведет NaN т.к. ее переменые будут записаны как Undefined
//Arguments позволяет не задавать переменные при написании функции , а использовать ее значения при вызове , как с массивом