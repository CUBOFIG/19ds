  
let Ordenar = function(array) {
    for (let i = 0; i < array.length; i++) {
       
        for (let j = 0; j < i; j++) {
            
            if (array[i]===array[j]){
                
               return console.log("Es repetido")
            } 
		
        } 
		
    }  
     return false
}

console.log(Ordenar([4,523,123,1,89,4]))