function getMinMax(str) {
  let result = {};
  arr = str.split(' ').map(item => !isNaN(item)  &&  +item ).filter(item => typeof(item) == "number").sort(compareNumeric);
  
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    }
	
  result.min = arr.shift();
  result.max = arr.pop();
  return result;
}