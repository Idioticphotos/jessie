/*global html */

/*
Description:
Relies on `el.parentNode` which has very good support
*/

/*
Degrades:
In browsers without `el.parentNode`
*/

var isDescendant;

if(html && 'undefined' != typeof html.parentNode) {
	isDescendant = function(el, elDescendant) {
		var parent = elDescendant.parentNode;
		while(parent && parent != el) {
			parent = parent.parentNode;
		}
		return parent == el;
	};
}