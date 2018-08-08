//Объект - это неупорядочное коллекция свойств, каждое из которых имеет имя и значение

var obj = {

};

var a = 10;
var b = 20;
var obj1 = {
    one: 'Hello',
    two: 'Moto',
    'some string': a + b,
    three: {
        a : 1,
        b : 2,
        c : {
            'str1' : 10,
            'str2' : 20,
        }
    }
};



var date = new Date();
var arr = new Array();

var obj2 = new Object();

var srt  = 'some string';
// obj1.two = 'NewString';
// console.log(obj1.two);

function addObj(o, i, v) {
    return o[i] = v;
}
addObj(obj, 'one', 'Hello');
addObj(obj, 'two', 'Moto');

console.log(obj.one,obj.two);
console.log(Object.prototype);

var obj3 = Object.create(obj1);
// var obj3 = Object.create(null);
// var obj3 = Object.create(Object.prototype);
obj3.one = 1;

// delete obj3.one;

console.log(obj3.one);


function iteration(o) {
    for( v  in o ){
        if(typeof o[v] == 'object'){
            iteration(o[v]);
        }else {
            console.log(v + '-' + o[v])
        }

    }
}
iteration(obj1);