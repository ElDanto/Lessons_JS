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
    },
    five:undefined
};
var obj2 = {
    one: 'Moto'
};


/*
if(obj1.one){
    alert(obj1.one);
}
*/
/*
if('one' in obj2){
    alert(obj1.one);
}
*/
/*
if(obj1.five){
    alert(obj1.one);
}*/
/*
if(obj1.hasOwnProperty('one')){
    alert(obj1.one);
}//Проверяет не наследуемые свойства у объектов
 */
// if(obj1.propertyIsEnumerable('one')){
//     alert(obj1.one);
// }
/*function iteration(o) {
    for( v  in o ){
        if(!o.hasOwnProperty(v))continue;
        if(typeof o[v] === 'function')continue;
        if(typeof o[v] == 'object'){
            iteration(o[v]);
        }else {
            console.log(v + '-' + o[v])
        }

    }
}*/
// iteration(obj1);
/*
var obj3 = {
    prop1 : 30,
    prop2 : 50,
    func:function () {
        console.log(this.prop1 + this.prop2);
    }
};
obj3.func();
*/
/*
obj3.func2 = function () {
    alert('world') ;
};
function foo() {
    console.log('foo');
}
obj3.func3 = foo();
*/
/*var o = {
    prop1 : 30,
    prop2 : 50,
    func:function () {
        console.log(this.prop1 + this.prop2);
    },
    get summ(){
        return this.prop1 + this.prop2;
    },
    set summ(value){
        o.prop1+= value
    }
}*/
/*
o.summ = 5;
console.log(o.summ);
*/
/*
Object.defineProperty(o,'prop3',{value:100,writable:true,enumerable:true,configurable:true});
o.prop3 =50;
iteration(o);*/

// var o2 = new fuu(a,b,c);
function People(name, age) {

    this.name = name;
    this.age = age;

    this.summ = function () {
        return this.name + ',' + this.age;
    }
}

// People.prototype(obj1);

var Ben = new People('Ben',43);
console.log(Ben.summ());