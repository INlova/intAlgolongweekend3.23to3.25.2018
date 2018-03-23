function whatIsInAName(collection, source) {
	//where grabs > input collection and compares to source selection
	var arr = collection.filter(function(item) {
		for (var i in source) { // check vals in the selection and compare to the item
			if (source[i] != item[i]) { // if Capulet is equal to source - true if != then false
				return false;
			}
		}
		return true;
	});
	return arr;
}
whatIsInAName([{
	first: "Romeo",
	last: "Montague"
}, {
	first: "Mercutio",
	last: null
}, {
	first: "Tybalt",
	last: "Capulet"
}], {
	last: "Capulet"
});