function factorial(n) {

  if (n == 0 || n == 1){
    return 1;
  }

  else {
  let n_i;
  let factorial_n = 1;

  for (let i = 0; i!=n; i++){
    n_i=n-i;
    factorial_n=factorial_n*n_i
  }
  return factorial_n;
}
}