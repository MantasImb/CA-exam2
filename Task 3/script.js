/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users"

const button = document.getElementById("btn")
const output = document.getElementById("output")
const message = document.getElementById("message")

button.addEventListener("click", async () => {
  const response = await fetch(ENDPOINT)
  const users = await response.json()

  message.style.display = "none"

  users.forEach((user) => {
    // create card
    const card = document.createElement("div")
    card.classList.add("user-card")

    // create image
    const image = document.createElement("img")
    image.src = user.avatar_url
    image.alt = user.login
    card.appendChild(image)

    // create login
    const login = document.createElement("p")
    login.textContent = user.login
    card.appendChild(login)

    output.appendChild(card)
  })
})
