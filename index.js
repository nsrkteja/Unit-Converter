/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnEl = document.getElementById("btn")
const number = document.getElementById("number")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

btnEl.addEventListener("click", function(){
    let val = number.value
    console.log(val)
    length.textContent = `${val} meters = ${(val*3.281).toFixed(3)} feet | ${val} feet = ${(val*(1/3.281)).toFixed(3)} meters`
    volume.textContent = `${val} liters = ${(val*0.264).toFixed(3)} gallons | ${val} gallons = ${(val*(1/0.264)).toFixed(3)} liters`
    mass.textContent = `${val} kilograms = ${(val*0.264).toFixed(3)} pounds | ${val} pounds = ${(val*(1/0.264)).toFixed(3)} kilograms`
})

