const stars = function(count){
	if (count === 0) {
		return '';
	};
	return '*' + stars(count-1);
}

const spaces = function(count){
	if (count === 0) {
		return '';
	};
	return ' ' + spaces(count-1);
}

const diamond = function(n){
	if (n%2 === 0) {
		n = n + 1
	};
	for (let i = 1; i <= n; i++) {
		console.log(spaces((n-i)/2) + stars(i));
		i++;
	};
	for (let j = n - 2; j >= 1; j--) {
		console.log(spaces((n-j)/2) + stars(j));
		j--
	};
}

diamond(5)
