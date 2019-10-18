function CONVINACION (n,r) {
	var total = 1; 
	for (i=1; i<=n; i++) {
        total = total * i; 
        
    }
    
    let suma = n - r
    
    let total2 = 1;
    for (i=1; i<=suma; i++) {
        total2 = total2 * i; 
    }
    let total3 = 1;
    for (i=1; i<=r; i++) {
        total3 = total3 * i; 
    }
    let formula = total/total2

    let formula2 = formula / total3
    
    return formula2

}

console.log(`Resultado 1>${CONVINACION(10,3)}`)