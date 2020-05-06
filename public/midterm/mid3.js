let a1 = [];
for(let i=0; i<3; ++i) {
    a1[i] = [2*i, 2*i+1];
}

let a2 = copy(a1);
a1[0][0] = 100;
console.log(a1);
console.log(a2);

function copy(a) {
    let m = [];
    for(let i=0; i<a.length; i++) {
        let t = a[i];
        m[i] = t;
    }
    return m;
}