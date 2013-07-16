// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, nodeParameter) {
	var returnNodes = [];
	var currentNode = (nodeParameter)?nodeParameter:document.body;
	var childNodes = currentNode.childNodes;
	var length = childNodes.length;
	for (var i=0;i<length;i++) {
		var list = childNodes[i].classList;
		if(list && list.contains(className)){
			returnNodes.push(childNodes[i]);
		}
		var grandchildNode =	getElementsByClassName(className, childNodes[i]);
		for(var j=0;j<grandchildNode.length;j++){
			returnNodes.push(grandchildNode[j]);
		}
	}
	return returnNodes;
};
