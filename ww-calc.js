importScripts('ww-calc-function.js');

self.onmessage = event=>{
  switch (event.data.command) {
    case 'calculate': {
      let result = expensiveFunction(Math.ceil(Math.random() * 99));
      self.postMessage({ result });
      close();
      break;
    }
  }
}
