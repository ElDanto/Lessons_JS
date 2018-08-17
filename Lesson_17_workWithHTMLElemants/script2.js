window.onload = function() {

    var c = document.getElementById("button");

    button.onclick = function () {

        var newDiv = document.createElement('div');
        var newText = document.createTextNode("Some String");
        var newComment = document.createComment("Some String");
        var documentFrag = document.createDocumentFragment();


        var copyButton = button.cloneNode();

        var copyDiv = document.querySelector(".wrap").cloneNode(true);


        //console.log(copyDiv);


        newDiv.appendChild(newText);

        //document.querySelector(".karkas").insertBefore(newDiv,null);
        //document.querySelector(".karkas").insertBefore(document.querySelector("h1"),null);
        //console.log(newDiv);

        //var h1 = document.querySelector('h1');

        //h1.parentNode.removeChild(h1);
        //replaceChild - заменяет на другой

        //document.querySelector(".karkas").replaceChild(newDiv,document.querySelector("h1"))

        function r(el) {

            var fr = document.createDocumentFragment();

            while(el.lastChild) {
                fr.appendChild(el.lastChild);
            }

            el.appendChild(fr);

        }

        r(document.querySelector(".karkas"));

    }

}
