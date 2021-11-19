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
    const todoEl = document.querySelector('#tasks') 
    let filteredTasks = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))
    filteredTasks = filteredTasks.filter((todo) => !filters.hideCompleted || !todo.completed)
    const incompletedTodos = filteredTasks.filter((todo) => !todo.complete)
    
    todoEl.innerHTML = ""
    todoEl.appendChild(generateSammaryDOM(incompletedTodos))

    if(filteredTasks.length > 0){
        filteredTasks.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMeaageEl = document.createElement('p')
        emptyMeaageEl.classList.add('empty-message') 
        emptyMeaageEl.textContent = 'No to-dos to show!'
        todoEl.appendChild(emptyMeaageEl)
    }
    
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
    const todoEl       = document.createElement('label')
    const containerEl  = document.createElement('div')
    const checkEl      = document.createElement('input')
    const todoText     = document.createElement('span')
    const removeButton = document.createElement('button')



    // Setup checkbox 
    checkEl.setAttribute('type', 'checkbox')
    checkEl.checked = todo.completed
    containerEl.appendChild(checkEl)
    checkEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodo(todos)
        renderTasks(todos, filters)
    })

    // Setup todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)


    // Setup remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodo(todos)
        renderTasks(todos, filters)
    })
    return todoEl
}

// Create Sammary DOM 
const generateSammaryDOM = (incompletedTodos) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const numTodos = incompletedTodos.length === 1 ? '' : 's'
    summary.textContent = `You have ${incompletedTodos.length} task${numTodos} left`
    return summary
}

