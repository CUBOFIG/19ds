let resultado
let log = prompt('Dame la nueva base')

const log7 = (x,y)=>  Math.log10(x)/Math.log10(y) 

for (let i = 0; i <=10;i++){

    resultado = log7(i,log)
    console.log(`Resultado ${i} es `+ resultado)

}