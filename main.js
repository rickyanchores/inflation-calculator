// General Variable

let item = document.querySelector(".itemName").value
let process = document.querySelector(".process")

// Calculation 

const calculateFutureValue = (current,inflationRate) => {
	let result = current + (1+inflationRate)
  console.log(result)
  process.innerHTML = result
}

//demo

// calculate()


// EVENT

process.addEventListener("click", () => {
	let current = document.querySelector(".current").value
  let inflationRate = document.querySelector(".inflationRate").value
  
  calculateFutureValue(parseInt(current),parseInt(inflationRate))
})