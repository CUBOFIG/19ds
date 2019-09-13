
let n = prompt(`dame un numero`)
TexToNumber = parseInt(n,10)
let ns = 0
for (var primos = 1; primos <= 100; primos++) {
    

    if (primos % 2 == 0) {
        
        ns += 1
        console.log(primos);

        if(ns === TexToNumber){
            break;
        }

    }
} 