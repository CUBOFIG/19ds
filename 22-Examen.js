const Conjunto = [4,523,123,1,89]
let Comprobacion

let Ordenar = function(array) {
    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < i; j++) {
            
            if (array[i]<array[j]){
                
                let compa = array.splice(i,1)

                array.splice(j,0,compa[0])
               
            } 
        } 
    }  
    return array
}

let Comprobar = function(array) {
    temp = array[0]
    for (let i = 0; i < array.length; i++) {
       if(array[i] >= temp) {
            temp = array[i]
            console.log(true)
       }else{
           console.log(false)
       }
    }
}

Comprobacion = Ordenar(Conjunto)

console.log(Ordenar(Conjunto))

console.log(Comprobar(Comprobacion))
