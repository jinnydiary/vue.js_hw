
function getExtension(fileName) {
    let f = fileName.split(".");
    return "."+f[1];
}

let a = [ "hello.html", "world.js", "readme.txt" ];
for(let i=0; i<a.length; ++i) {
    console.log(getExtension(a[i]));
}