function camelize(str) {
  arr = str.split('');
  return 	arr.map((item, index, arr) => {
    if (item != '-') {
      return item;
    } 
    arr.splice(index,1);
    return arr[index].toUpperCase()  }).join('');
}