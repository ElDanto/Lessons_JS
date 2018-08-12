window.onload = function () {
    // console.log(window.location);
    // console.log(location);

    // console.log(document.location);
    // console.log(location.href);

    // console.log(location.toString());

    // alert(location);

    /*function urlArgs() {
        var args = {};
        var query = window.location.search.substring(1);
        var parts = query.split("&");
        for(var i = 0; i < parts.length; i++){
            var pos = parts[i].indexOf('=');
            if(pos == -1){
                continue;
            }
            var name = parts[i].substring(0,pos);
            var value = parts[i].substring(pos+1);

            args[name] = value;

        }
        return args;
    }
    var obj = urlArgs();
    console.log(obj.page)*/

    var b = document.getElementById('openWindow');
    b.onclick = function () {
        // window.location.assign('f1.html');
        // window.location.replace('f1.html');
        // window.location.reload('f1.html');
        window.location = 'f1.html';
    }
    // history//History
    // history.length;
    // history.back();
    // history.forward();
    // history.go(1);

    // console.log(window.navigator);
    console.log(window.screen);
}
