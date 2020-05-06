let m = [];
let MAX = 100, MIN = 1;
for(let i=0; i<100; ++i) {
    m[i] = Math.floor( Math.random()*(MAX-MIN+1) + MIN);
}

function callback(a) { 
     
}
  
let count = m.reduce(callback);
console.log(count);
  