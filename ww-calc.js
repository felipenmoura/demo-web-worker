function expensiveFunction (len=90) {
  var i= 0,
      l= 800000000 + len,
      r= 0;
  console.log('starting');
  for (; i<=l; i++) {
    r = r + l - i; // some random calculation here :p
  }
  console.log('ending', r);
  return r;
}

self.onmessage = event=>{
  switch (event.data.command) {
    case 'calculate': {
      let result = expensiveFunction(Math.ceil(Math.random() * 99));
      self.postMessage({ result });
      break;
    }
  }
}
