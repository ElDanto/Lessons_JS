window.onload = function() {

    document.querySelector('h2').onclick = function () {


        // var li = document.querySelector('#header');

        /*console.log(li.innerHTML);
        li.innerHTML = 'HelloMoto'*/

       /* li.outerHTML  = "<h1>" + li.outerHTML + "</h1>";
        console.log(li.outerHTML);*/

       // li.insertAdjacentHTML("beforeBegin",'<strong> Some text </strong>');
       // li.insertAdjacentHTML("afterBegin",'<strong> Some text </strong>');
       // li.insertAdjacentHTML("beforeEnd",'<strong> Some text </strong>');
       // li.insertAdjacentHTML("afterEnd",'<strong> Some text </strong>');

        /*var li = document.querySelector('.current').firstChild;

        console.log(li.textContent);
        // li.textContent = 'Some Text';
        //li.innerText = 'Some Text';

        function textContent(el,value) {
            var content = el.textContent;

            if(value === undefined) {
                if(content !== undefined) {
                    return content;
                }
                else {
                    return el.innerText;
                }
            }
            else {
                if(content !== undefined) {

                    el.textContent = value;

                }
                else {
                    el.innerText = value;
                }
            }
        }*/

        // textContent(li,'hello');

        // var div = document.querySelector('.sf-menu');
        // //console.log(div.innerText);
        //
        //
        // function textContent(el) {
        //     var child, type, s = "";
        //
        //     for (child = el.firstChild; child != null; child = child.nextSibling) {
        //         type = child.nodeType;
        //         if(type == 3) {
        //             s +=  child.nodeValue;
        //         }
        //         else if (type === 1) {
        //             s += textContent(child);
        //         }
        //
        //     }
        //
        //     return s;
        // }
        //
        // console.log(textContent(div));


    };
}

