let a1 = [];
for(let i=0; i<3; ++i) {
    a1[i] = [2*i, 2*i+1];
}

let a2 = Object.assign([], a1);
a1[0][0] = 100;
console.log(a1);
console.log(a2);