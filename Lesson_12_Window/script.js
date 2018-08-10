/*
window.location
*/
// window.alert();
// window.document.getElementById();// <div id=''></div>
// window.setTimeout();
// window.setInterval();

window.onload = function () {

    var wrap = document.getElementById('popup_overlay');
    var closeB = document.getElementById('popup_close');
    closeB.onclick = popupClose;
    var inP = document.getElementById('popupIn');
    inP.onclick = popup();

    var tIn, tOunt;
     

    function popup() {
        wrap.style.display = 'block';
        // wrap.style.opacity = 1;
        popupIn(1);
        
    }
    function popupClose() {
        popupOut(0);
    }
    function popupIn(x) {
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;
        if(op < x){
            clearInterval(tOunt);
            op += 0.05;
            wrap.style.opacity = op;
            tIn = setTimeout(popupIn, 50, x);
        //     setTimeout(function () {popupIn(x)}, 50,);//CrossBrowzer
         }
    }
    function popupOut(x) {
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;
        if(op > x){
            clearInterval(tIn);
            op -= 0.05;
            wrap.style.opacity = op;
            // setTimeout(popupIn, 50, x);
            tOut = setTimeout(function () {popupOut(x)}, 50,);//CrossBrowzer
         }
         if(wrap.style.opacity == x){
                wrap.style.display = 'none';
         }
    }
    setTimeout(popup, 3000);
    
    var h1 = document.getElementById('header');
    h1.onclick = function () {
        clearTimeout(intStop);
    }
    function changeColor() {
        if(h1.style.color == 'black'){
            h1.style.color = 'white';
        }else{
            h1.style.color = 'black';
        }
    }
    var intStop = setInterval(changeColor,300);

    do{
        var str = prompt("Введите сообщение");
        var result = confirm("Вы ввели" + str + ". Нажмите ok для продолжения");
    }while(!result)
}
