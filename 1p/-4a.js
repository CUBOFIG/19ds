  
const loops = 10
const a = 2
let temp = 0
let form


for (let i = 0; i <= loops; i++) {
    temp += Math.pow(a, i);
}


form = (Math.pow(a, loops + 1) - 1) / (a - 1)

console.log('Sumatoria: ', temp)
console.log('Formula: ', form)