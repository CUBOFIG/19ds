const n = 10
let New = 0
let form

for (let i = 1; i <= n; i++) {
    New+= i * i
}

form = (n * ( n + 1 ) * ( 2 * n + 1 )) / 6

console.log('Sumatoria: ', New)
console.log('Formula: ', form)