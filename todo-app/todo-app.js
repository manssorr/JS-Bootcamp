'use strict'

const todos = getSavedTodo()

const filters = {
    searchText: "",
    hideCompleted: false
}

renderTasks(todos, filters)

document.querySelector('#text-task').addEventListener('input', (event) => {
    console.log(event.target.value)
    filters.searchText  = event.target.value
    renderTasks(todos, filters)

})

// Add new note button Call
document.querySelector('#add-todo').addEventListener('submit', (event) => {
    event.preventDefault()
    todos.push({
        id: uuidv4(),
        text: event.target.todoText.value,
        completed: false
    })

    saveTodo(todos)
    renderTasks(todos, filters)
    event.target.todoText.value = ""
})

// Hide Complete Fiilter Call
document.querySelector('#hide-complete').addEventListener('change', (event) => {
    filters.hideCompleted = event.target.checked
    console.log(filters.hideCompleted)
    renderTasks(todos, filters)
})

