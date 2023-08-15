/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector("form")
const output = document.querySelector("#output")

function convertToLb(kgAmount) {
  return kgAmount * 2.2046
}
function convertToG(kgAmount) {
  return kgAmount / 0.001
}
function convertToOz(kgAmount) {
  return kgAmount * 35.274
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(e.target)
  const kgAmount = e.target[0].value
  output.textContent = `
    Svarai: ${convertToLb(kgAmount)};
    Gramai: ${convertToG(kgAmount)};
    Uncijos: ${convertToOz(kgAmount)}.
  `
})
