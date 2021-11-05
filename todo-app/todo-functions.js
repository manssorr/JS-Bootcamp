// Fetch data saved at local storage if found
const getSavedTodo = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to local storage 
const saveTodo = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// render the todo list
const renderTasks = function (todos, filters) {
    filteredTasks = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTasks = filteredTasks.filter(function(todo) {
        return !filters.hideCompleted || !todo.completed
    })
    
    const incompletedTodos = filteredTasks.filter(function(todo) {
        return !todo.completed
    })

    document.querySelector('#tasks').innerHTML = ""
    document.querySelector('#tasks').appendChild(generateSammaryDOM(incompletedTodos))

    filteredTasks.forEach(function(todo) {
        document.querySelector('#tasks').appendChild(generateTodoDOM(todo))
    })
}

// Remove some todos by (x) button
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return id === todo.id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Change todo status by checkbox
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Create the DOM structure of todo
const generateTodoDOM = function (todo) {
    const todoEl    = document.createElement('div')
    let checkEl     = document.createElement('input')
    const textEl    = document.createElement('span')
    const removeBTN = document.createElement('button')



    // Checkbox setup
    checkEl.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkEl)
    checkEl.checked = todo.completed

    checkEl.addEventListener('change', function(){
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
    removeBTN.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodo(todos)
        renderTasks(todos, filters)
    })
    return todoEl
}

// Create Sammary DOM 
const generateSammaryDOM = function (incompletedTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompletedTodos.length} tasks left`
    return summary
}

