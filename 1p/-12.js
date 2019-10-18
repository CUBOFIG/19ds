let Ordenar = function(array) {

    let x = 0

    for (let i = 0; i < array.length; i++) {
       
        for (let j = 0; j < i; j++) {
            
            if (array[i]===array[j]){
                x+=1
             	
            } 
			
        } 
		
    }  
console.log(`Se repite ${x} veces`)
 
}

console.log(Ordenar([523,123,89,9,9]))