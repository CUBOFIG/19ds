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

console.log(Comprobar([1,2,3]))
console.log(Comprobar([2,3,1]))