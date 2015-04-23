/* 
Mobilize.js
Copyright 2015 Ollie Phillips

See mobilize.css for instructions
*/

var mobilize = {
	// Properties
	width: screen.width,
	elems: document.getElementsByClassName('remobilize'),
	
	// Methods
	init : function () {
		if(mobilize.width >= 320 && mobilize.width <= 568) {
			// Mobile viewport, do we have elements with 'remobilize' class
			if(mobilize.elems){
				// Yes, move to restructuring
				mobilize.restructure();
			}	
		}	
	},
	
	restructure: function() {
		// Restructure operations, move-first, move-last, move-before-x, move-after-x (where x is an element id)
		var elems = Array.prototype.slice.call(mobilize.elems, 0);
		var len =  mobilize.elems.length;
		for (i=0; i < len; i++) {		
			elem = elems[i];
			if(mobilize.hasClass(elem, 'move-first')) {
				document.getElementsByTagName("BODY")[0].insertBefore(elem, document.getElementsByTagName("BODY")[0].firstChild);
			}
			if(mobilize.hasClass(elem, 'move-last')) {
				document.getElementsByTagName("BODY")[0].appendChild(elem);
			}
			if(mobilize.hasClass(elem, 'move-before-')) {
				var node = mobilize.getSuffix(elem, 'move-before-');
				var parentNode = document.getElementById(node).parentNode;
				parentNode.insertBefore(elem, document.getElementById(node));
			}
			if(mobilize.hasClass(elem, 'move-after-')) {
				var node = mobilize.getSuffix(elem, 'move-after-');
				var parentNode = document.getElementById(node).parentNode;
				parentNode.insertBefore(elem, document.getElementById(node).nextSibling);
			}
		}	
	},
	
	hasClass: function(element, cls) {
	    return (' ' + element.className + ' ').indexOf(' ' + cls) > -1;
	},	
	
	getSuffix: function(element, cls) {
		var rule = 	(element.getAttribute("class").toString().match(new RegExp(cls + "[A-Za-z0-9]*")) || [null]);
		if(rule) {
			return rule.toString().split("-")[2];
		}	
	} 
}
	
document.addEventListener('DOMContentLoaded', function(){
	// IE 9 upwards 
	mobilize.init();
});