module.exports.formatDate = function(strDate) {	
	let output = '';
	if (strDate == '') {
		output = "-"
	} else {
		let date = new Date(strDate);
		output = date.toLocaleDateString("en-EN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
	}
	return output;
}