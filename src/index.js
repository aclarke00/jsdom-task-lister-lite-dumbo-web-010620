document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector('#tasks')
  let listItem = document.createElement('ul')

  const task = document.getElementById('create-task-form')

  task.addEventListener('submit', event => {
    event.preventDefault() // stops the submit from calling an HTML request

    let taskInfo = document.querySelector('#new-task-description').value

    const newLi = document.createElement('li')
    newLi.innerHTML = taskInfo + "<button class='delete'>delete me</button>"
    list.appendChild(newLi)

    const deleteButton = newLi.querySelector('.delete')

    deleteButton.addEventListener('click', event => {
      newLi.remove()
    })


  })




});
 