let n =prompt(`dame un numero`)

let a = 1
let b = 1
var c 
console.log(a)
console.log(b)
c   = b + a;
console.log(c)
for(var i = 3; i <= n-1;   i++)
 {
 a = b;
 b = c;
 c = b + a;
 console.log(c)

}   

//O(f(n))