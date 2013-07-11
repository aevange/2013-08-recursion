// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var text = "";
	if (typeof obj === 'number' || typeof obj === 'boolean') {
		text += obj;
	} else if (typeof obj === 'string') {
		text += '"';
		text += obj;
		text += '"';
	} else if (obj == null){
		text = "null";
	}
	return text;
};