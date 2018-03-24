function uniteUnique(arr) {
	arr = Array.prototype.slice.call(arguments);
	var x = [].concat.apply([], arr);
	return x.filter(function(el, pos, array) {
		return array.indexOf(el) == pos;
	});
}
uniteUnique([1, 2, 2], [5, 5, 1, 2], [2, 1]);