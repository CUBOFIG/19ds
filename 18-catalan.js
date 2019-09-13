const numero = prompt(`Dame un numero`)
const Nnumero = parseInt(numero,10)

function funcion(n){
    let r = 1

    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 

    return r
}


const catalan = (n) => { 
    return funcion(2 * n) / (funcion(n+1) * funcion(n))
}


for (let i = 0; i <Nnumero ; i++) {
    
    console.log(catalan(i))
    
}