
function getExtension(fileName) {
    let index = fileName.indexOf(".");
    let f = fileName.slice(index);
    return f;
}

let a = [ "hello.html", "world.js", "readme.txt" ];
for(let i=0; i<a.length; ++i) {
    console.log(getExtension(a[i]));
}