'use strict'

const todos = getSavedTodo()
const filters = {
    searchText: "",
    hideCompleted: false
}
renderTasks(todos, filters)

document.querySelector('#text-task').addEventListener('input', (event) => {
    filters.searchText  = event.target.value
    renderTasks(todos, filters)
})

// Add new note button Call
document.querySelector('#new-todo').addEventListener('submit', (event) => {
    const text = event.target.todoText.value.trim()
    event.preventDefault()

    if(text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        saveTodo(todos)
        renderTasks(todos, filters)
        event.target.todoText.value = ""
    }
})

// Hide Complete Fiilter Call
document.querySelector('#hide-complete').addEventListener('change', (event) => {
    filters.hideCompleted = event.target.checked
    renderTasks(todos, filters)
})

