var x , y , op , res;
console.log(111);
function culc(x,y,op) {
    if(op = '+'){
        res= x + y;
        return res;
    }else if(op = '-'){
        res= x - y;
        return res;
    }else if(op = '*'){
        res= x * y;
        return res;
    }else if(op = '/'){
        res= x / y;
        return res;
    }else if(op = '+'){
        res= x + y;
        return res;
    }else if(op = 'mod'){
        res= x % y;
        return res;
    }else{
        return 'Eror NaN'
    }
}