function expensiveFunction (len=90) {
  let i= 0,
      l= 1000000000 + len,
      r= 0;
  console.log('starting');
  for (; i<=l; i++) {
    r = r + l - i; // some random calculation here :p
  }
  console.log('ending', r);
  return r;
}
