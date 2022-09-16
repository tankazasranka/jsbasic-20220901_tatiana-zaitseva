function getMinMax(str) {
  arr = str.split(' ').map(item => +item).filter(item => !isNaN(item)).sort(compareNumeric);
  
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    }
	
  return {
    min: arr[0],
    max: arr.pop()
  };
}