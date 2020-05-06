let m = [];
let MAX = 100, MIN = 1;
for(let i=0; i<100; ++i) {
    m[i] = Math.floor( Math.random()*(MAX-MIN+1) + MIN);
}

let cnt = 0;
let count = m.reduce((a) => (a%2==0)? ++cnt : cnt);
console.log(count);
  