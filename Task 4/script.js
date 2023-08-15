/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.getElementById("output")

function createCard(brand, models) {
  const card = document.createElement("div")
  card.classList.add("card")

  const cardTitle = document.createElement("h2")
  cardTitle.classList.add("card-title")
  cardTitle.innerText = brand

  const cardBody = document.createElement("div")
  cardBody.classList.add("card-extended")

  const cardExtender = document.createElement("button")
  cardExtender.classList.add("card-extender")
  cardExtender.innerText = "Car Models >"
  cardExtender.addEventListener("click", () => {
    cardBody.classList.toggle("card-extended")
    cardExtender.innerText = cardBody.classList.contains("card-extended")
      ? "Car Models >"
      : "Car Models v"
  })

  const cardBodyList = document.createElement("ul")

  for (const model of models) {
    const cardBodyListItem = document.createElement("li")
    cardBodyListItem.classList.add("card-body-list-item")
    cardBodyListItem.innerText = model
    cardBodyList.appendChild(cardBodyListItem)
  }

  cardBody.appendChild(cardBodyList)

  card.appendChild(cardTitle)
  card.appendChild(cardExtender)
  card.appendChild(cardBody)

  return card
}

async function main() {
  const response = await fetch("cars.json")
  const cars = await response.json()
  cars.forEach((car) => {
    const card = createCard(car.brand, car.models)
    output.appendChild(card)
  })
}

main()
