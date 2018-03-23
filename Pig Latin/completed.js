function translatePigLatin(str) {
	var vowelpen = ['a', 'e', 'i', 'o', 'u'];
	var oink = str.split('');
	if (vowelpen.includes(str[0])) {
		return str += 'way'; //concatted!
	} else {
		for (var i = 0; i < str.length; i++) //for loop until triggers consonants
			if (!vowelpen.includes(str[i])) {
				oink.push(oink.shift()); //push to end and return it! 2x
			}
		else {
			oink.push('ay'); //add ay
			return oink.join('');
		}
	}
}
translatePigLatin("HelloJavier");