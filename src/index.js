document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#list').addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target.new_todo.value)
  })
});
function handleToDo(todo) {
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.textContent = "x"
  p.textContent = `${todo}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#todo_container').appendChild(p)
}
function displayData() {
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    let form = event.target.description.value
  })
}
displayData()
