'use strict'

// Fetch data saved at local storage if found
const getSavedTodo = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        return []
    }
}

// Save todos to local storage 
const saveTodo = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// render the todo list
const renderTasks = (todos, filters) => {
    let filteredTasks = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

    filteredTasks = filteredTasks.filter((todo) => !filters.hideCompleted || !todo.completed)
    
    const incompletedTodos = filteredTasks.filter((todo) => !todo.complete)

    document.querySelector('#tasks').innerHTML = ""
    document.querySelector('#tasks').appendChild(generateSammaryDOM(incompletedTodos))

    filteredTasks.forEach((todo) => {
        document.querySelector('#tasks').appendChild(generateTodoDOM(todo))
    })
}

// Remove some todos by (x) button
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => id === todo.id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Change todo status by checkbox
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

// Create the DOM structure of todo
const generateTodoDOM = (todo) => {
    const todoEl    = document.createElement('div')
    let checkEl     = document.createElement('input')
    const textEl    = document.createElement('span')
    const removeBTN = document.createElement('button')



    // Checkbox setup
    checkEl.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkEl)
    checkEl.checked = todo.completed

    checkEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodo(todos)
        renderTasks(todos, filters)

    })

    // todo text setup
    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    // remove button setup
    removeBTN.textContent = 'x'
    todoEl.appendChild(removeBTN)
    removeBTN.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodo(todos)
        renderTasks(todos, filters)
    })
    return todoEl
}

// Create Sammary DOM 
const generateSammaryDOM = (incompletedTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompletedTodos.length} tasks left`
    return summary
}

