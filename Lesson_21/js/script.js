window.onload = function(e) {		
	
	function handler (e) {
		
		e = e || window.event;
		
		if(this.tagName == 'SPAN') {
			this.style.backgroundColor="yellow";
			//e.cancelBubble = true;
		}
		else if(this.tagName == 'P') {
			this.style.backgroundColor="green";
		}
		else {
			this.style.backgroundColor="gray";
		}
		
	}

	function addEvent(target,type,hendler) {
		if(target.addEventListener) {
			target.addEventListener(type,hendler,false)
		}
		else {
			target.attachEvent("on" + type,function (e) {
				return hendler.call(target,e);
			});
		}
	}
	
	//addEvent(button,'click',handler);
	
	/*addEvent(document.getElementById('three'),'click',handler);
	addEvent(document.getElementById('two'),'click',handler);
	addEvent(document.getElementById('one'),'click',handler);
	*/
	
	document.getElementById('one').addEventListener('click', 
		function(event) {
			this.style.backgroundColor = "gray";
			alert(this.tagName);
			if(event.target.tagName == 'SPAN') {
				event.stopPropagation();
			}
		},true);
		
	document.getElementById('two').addEventListener('click', 
		function(event) {
			this.style.backgroundColor = "green";
			
			alert(this.tagName);
			
		},true);	
	
	document.getElementById('three').addEventListener('click', 
		function(event) {
			this.style.backgroundColor = "yellow";
			alert(this.tagName);
			//event.stopImmediatePropagation();
		},true);
	
	/*document.getElementById('three').addEventListener('click', 
		function(event) {
			alert('func two');
		},false);
	document.getElementById('three').addEventListener('click', 
		function(event) {
			alert('func three');
		},false);*/
			
	
	document.getElementById('firstForm').addEventListener('click',
		function(e) {
			e.target.style.border = "1px solid pink";

			console.log(this);
		},false);
	
}


	

	