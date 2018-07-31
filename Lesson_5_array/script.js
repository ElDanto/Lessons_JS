var arr = [];
//         0,1,2,3,4,5,6
var arr2 = [['world','hello'],1,2,3,4,5,6,7];

/*
var a ='script';
var arr3 = [1,2,3,a,5,[1,2,3],6,7];
var arr4 = [a+19,a-5];
*/
/* var arr3 = new Array();//[]

 var arr3 = new Array(5);//Задаем длину массива(с пустыми ячейками)

 var arr3 = new Array(1,2,3,4,5,'string');//[]
 */
arr2[1] = 'Hello';//!!!Заменять значение в массиве только так
alert(arr2[1]);
arr2[7] = 'Moto';
arr2[8] = 'world';
alert(arr2[0][0]);

var k = Object.keys(arr2);

for(var i = 0; i < k.length; i++){
    document.write(k[i] + '=>' + arr2[k[i]]);
}
/*
for(var i = 0; i < arr2.length; i++){
    document.write(arr2[i]);
}
*/
var table = new Array(10);
for(var i = 0; i < table.length; i++){
 table[i] = new Array(10);
}
for(var row = 0; row < table.length; row++){

    for (var col = 0; col < table[row].length; col++){
        table[row][col] = row * col
    }
}

alert(table[5][6]);