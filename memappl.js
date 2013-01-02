function checkemailequals(input, input2) {
	if (input.value != input2.value) {
		input.setCustomValidity('The two email addresses must match.');
	} else {
		input.setCustomValidity('');
	}
}