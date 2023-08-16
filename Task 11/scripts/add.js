import { postSkill } from "../utils/skillsAPI.js"

const form = document.querySelector("form")
const input = document.getElementById("skill-input")

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault()
    const response = await postSkill(input.value)
    console.log(response)
    if (!response.msg) throw new Error(response.error || "Something went wrong")
    alert(response.msg)
    window.location.href = "../index.html"
  } catch (error) {
    alert(error.message)
  }
})
