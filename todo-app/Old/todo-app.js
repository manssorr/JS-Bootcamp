let todos = []

// const todos = [{
//     text: 'Done 6h Study JS',
//     completed: false
// }, {
//     text: 'Go to Uni',
//     completed: false
// }, {
//     text: 'Listen to 1,2 At quite BOM',
//     completed: true
// }, {
//     text: 'Done Study 3h Uni',
//     completed: false
// }, {
//     text: 'Prey All 5 today',
//     completed: true
// }]

const filters = {
    searchText: "",
    hideCompleted: false
}
// ------------------------------------------------------------------------------

// Chall01 -search -remove
// const todos = document.querySelectorAll('p') 
// todos.forEach(function(todo) {
//     const text = todo.textContent
//     if (text.includes('Done')) {
//         todo.remove()
//     }
// })

// ------------------------------------------------------------------------------

// Chall02 -fiter -createNew
// const completedTodos = todos.filter(function(todo) {
//     return todo.completed
// })
// const incompletedTodos = todos.filter(function(todo) {
//     return !todo.completed
// })

// const summary = document.createElement('h2')
//     summary.textContent = `You have ${incompletedTodos.length} tasks left`
//     document.querySelector('body').appendChild(summary)


// todos.forEach(function(todo) {
//     const newTodo = document.createElement('p')
//     if (!todo.completed) {
//         newTodo.textContent = todo.text
//         document.querySelector('body').appendChild(newTodo)
//     }
// })

// ------------------------------------------------------------------------------

// // Chall02 -addBotton
// document.querySelector('button').addEventListener('click', function(event) {
//     console.log("Hi, Add your Task please")
//     event.target.textContent = "Add, Another one MAN!"
// })

// ------------------------------------------------------------------------------

// Chall03 -addSearchFeild

// document.querySelector('#add-task').addEventListener('input', function(event) {
//     console.log(event.target.value)
// })

// ------------------------------------------------------------------------------

// Chall06 -localStorage

// check if saved data

const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

// ------------------------------------------------------------------------------

// Chall04 -liveFilterSearch

const renderTasks = function (todos, filters) {
    // if (filters.hideCompleted) {
    //     console.log('hideCompleted ON')
    //     filteredTasks = todos.filter(function(todo) {
    //         return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed
    //     })
    // } else {
    //     console.log('hideCompleted OFF')
    //     filteredTasks = todos.filter(function (todo) {
    //         return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    //     })
    // }

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

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompletedTodos.length} tasks left`
    document.querySelector('#tasks').appendChild(summary)

    
    filteredTasks.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#tasks').appendChild(p)
    })
}

renderTasks(todos, filters)


document.querySelector('#text-task').addEventListener('input', function(event) {
    console.log(event.target.value)
    filters.searchText  = event.target.value
    renderTasks(todos, filters)

})

document.querySelector('#add-todo').addEventListener('submit', function(event) {
    event.preventDefault()
    todos.push({
        text: event.target.todoText.value,
        completed: false
    })

    localStorage.setItem('todos', JSON.stringify(todos))

    renderTasks(todos, filters)
    event.target.todoText.value = ""
})

// ------------------------------------------------------------------------------

// Chall05 -hideCompleted

document.querySelector('#hide-complete').addEventListener('change', function(event) {
    filters.hideCompleted = event.target.checked
    console.log(filters.hideCompleted)
    renderTasks(todos, filters)
})

