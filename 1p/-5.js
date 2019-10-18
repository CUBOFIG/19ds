
const loops = 10
const k = 2
let temp = 0
let form
let t = 0

for (let i = 1; i <= loops; i++) {
    temp+= Math.pow(i, k)
}

t = k + 1

form = ((1 / t) * (Math.pow(loops, t)))

console.log('Sumatoria: ', temp)
console.log('Formula: ', form)