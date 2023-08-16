import { getSkills, deleteSkill } from "./utils/skillsAPI.js"

const tableBody = document.getElementById("skills")

async function main() {
  try {
    const skills = await getSkills()

    if (!skills.length) throw new Error("No skills found")

    skills.forEach((skill) => {
      createSkillRow(skill)
    })
  } catch (error) {
    alert("Failed to load skills: " + error.message)
  }
}

function createSkillRow({ id, skill }) {
  const row = document.createElement("tr")
  const idCell = document.createElement("td")
  idCell.textContent = id
  const skillCell = document.createElement("td")
  skillCell.textContent = skill
  const deleteCell = document.createElement("td")
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete"
  deleteButton.classList.add("delete-btn")
  deleteButton.addEventListener("click", async () => {
    try {
      const result = await deleteSkill(id)
      if (!result.msg) throw new Error(result.error || "Unknown error")
      row.remove()
      alert(result.msg)
    } catch (error) {
      alert("Failed to delete skill: " + error.message)
    }
  })

  deleteCell.appendChild(deleteButton)
  row.appendChild(idCell)
  row.appendChild(skillCell)
  row.appendChild(deleteCell)
  tableBody.appendChild(row)
}

main()
