var arr2 = [1,['Hello','Moto'],2,3,4,5,6,7];
//in - Позволяет проверить существование определенного свойства массиве/объекте
/*
if(3 in arr2){
    alert('true');
}else{
    alert('false');
}
*/
/*
if(Array.isArray(arr2)){
    for(var i = 0; )
}
*/
//alert(arr2.join('-'));
//arr2.reverse();
/*
arr2.sort(function (a,b) {
    console.log(a + '|' + b);
    return b-a;
});
*/
//var arr_res = arr2.concat(5,6,7);
/*
var arr_res = arr2.slice(-3);
arr2.splice(2,2,5,7,10);//обрезать этот элемент и все последующии
*/
//arr2.push(10,20,30);//Добавляет элементы в конец массива
//arr2.pop();//Удаляем последний элемент массива
//arr2.unshift(2,3,45);//Добавляет элементы в начало массива
//arr.shift();//Удаляет первый элемент массива
// delete arr2[0];//Удаляет выбранный элемент массива
// arr2.forEach(function (v,i,a) {
//     a[i]= v + 10 + 'hello'
// }); // v-значение элемента массива , i - идекс текущего элемента массива ,a - сам массив
// var res = arr2.map(function (x,i,a) {
//     return x*x;
// });
// var res = arr2.filter(function (x,i,a) {
//     return x < 5;
// });//Функция должна выводить  true/false
//every();
//some();
// var res = arr2.every(function (x) {
//     return x < 5;
// });
// var res = arr2.some(function (x) {
//     return x < 5;
// });
var res = arr2.reduce(function (x,y) {
    return x+y;
},0);
alert(arr2.indexOf(3));
alert(arr2.lastIndexOf(3));
for (var key in arr2){
    document.write(key + '=>' + arr2[key] + '<br />')
}
alert(res);
alert(arr2);