let m = [];
let MAX = 100, MIN = 1;
for(let i=0; i<100; ++i) {
    m[i] = Math.floor( Math.random()*(MAX-MIN+1) + MIN);
}

for(let i=0; i<m.length; ++i) {
    let a = m[i]%10;
    if(a > 5 && a < 9) {
        m.splice(i, 1);
        i--;
    }
}

console.log(m);
