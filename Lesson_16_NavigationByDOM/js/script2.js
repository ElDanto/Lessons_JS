
window.onload = function() {
	
	// p div h1
	// #id .class
	
	 
	// input[name='email']
	
	// .class[name='email']
	
	//#id .class
	//#id, .class
	
	
	//console.log(document.querySelectorAll('p'));/Получаем объект NodeList
	//console.log(document/*.querySelector('p')*/.querySelector('span'));//Element//Возвращается только первый найденный элемент
	
	// :first-line
	// :first-leter
	
	//:link
	//:visited
	
	
	
	
	document.querySelector('h2').onclick = function () {
		
		var myLi = document.querySelector('.current');
		
		//console.log(myLi.parentNode);//Показывает родителя
		//console.log(myLi.childNodes);//Показывает дочерний элемент
		//myLi.parentNode.firstChild.style.border = '2px solid red';
		//myLi.parentNode.lastChild.style.border = '2px solid red';
		
		///myLi.nextSibling.previousSibling.style.border = '2px solid red';//Предыдущий братский узел
		
		//console.log(myLi.nextSibling.nextSibling.firstChild.firstChild.nodeValue = 'hello');
		
		//console.log(myLi.nextSibling.nextSibling.firstChild.nodeName);
		
		// console.log(myLi.parentNode.children);
		//myLi.parentNode.firstElementChild.style.border = '2px solid red';
		//myLi.parentNode.lastElementChild.style.border = '2px solid red';
		
		//myLi.nextElementSibling.style.border = '2px solid red';
		//myLi.previousElementSibling.style.border = '2px solid red';
		
		//console.log(myLi.parentNode.children.length);
		// console.log(myLi.id = 'Hello'+'Moto');
		
		//console.log(document.forms[0].action = 'http://google.ru');
		//console.log(document.links[0].href = 'http://google.ru');
		// console.log(document.querySelector('label.name').style.borderTop="5px solid blue");
		
		document.images[0].setAttribute('for','100');
		console.log(document.images[0].getAttribute('for'));
		
		if(document.images[0].hasAttribute('for')) {
			document.images[0].removeAttribute('for');
		}
		
		
		
	};
}

