function binaryAgent(str) {
	str = str.split(' ');
	var decimalArr = [];
	var charArr = [];
	str.forEach(function(char) {
		decimalArr.push(parseInt(char, 2).toString());
	});
	decimalArr.forEach(function(char) {
		charArr.push(String.fromCharCode(char));
	});
	return charArr.join('');
}