function sumAll(arr) {
	var min = Math.min.apply(null, arr);
	var max = Math.max.apply(null, arr);
	var sum = 0;
	for (var i = min; i <= max; i++) {
		sum += i;
	} //loop as long as less than or eq to max
	return sum;
}
sumAll([1, 100]);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null