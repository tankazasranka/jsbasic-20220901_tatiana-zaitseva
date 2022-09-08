function truncate(str, maxlength) {
	if (str.length <= maxlength) {
    return str.substr(0);
	} else if (str.length > maxlength) {
    return str.slice(0, maxlength-1)+'…'
}
}
