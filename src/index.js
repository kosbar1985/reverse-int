module.exports = function reverse (n) {
    let a = String(n); 
    let a1 = a.match(/[0-9]/g);
    let b = a1.reverse().join("");
    let c = Number(b);
   
    return(c);
}
