let x = 2
let xN = parseInt(x,10)
let formul = Math.exp(x)

console.log(`formula ${formul}`)

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
let formula = 0

for(let i = 0; i <= 9;i++){
    formula += Math.pow(xN,i)/factorial(i)

}

console.log(`formula ${formula}`)  