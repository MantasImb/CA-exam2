const BASE_URL = "https://melon-potent-period.glitch.me"

export async function getSkills() {
  try {
    const response = await fetch(BASE_URL + "/skills", {
      method: "GET",
    })
    const skills = await response.json()
    return skills
  } catch (error) {
    alert(error.message)
  }
}

export async function postSkill(skill) {
  try {
    const response = await fetch(BASE_URL + "/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skill: skill }),
    })
    const result = await response.json()
    return result
  } catch (error) {
    alert(error.message)
  }
}

export async function deleteSkill(id) {
  try {
    const response = await fetch(BASE_URL + "/skill/" + id, {
      method: "DELETE",
    })
    const result = await response.json()
    return result
  } catch (error) {
    alert(error.message)
  }
}
