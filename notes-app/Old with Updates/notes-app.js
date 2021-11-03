// DOM - Document Object Model
let notes = []
// const notes = [{
//     title: 'my next trip',
//     body: 'I would like to go to Spain'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.'
// }, {
//     title: 'Office modification',
//     body: 'Get a new seat'
// }]

const filters = {
    searchText: "",
    filteredBy: ""
}

// Checking if data saved

const notesJSON = localStorage.getItem('notes')
if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes( filters.searchText.toLowerCase() )
    })
    
    document.querySelector('#notes').innerHTML = ""
    
    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')
        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed note'
        }

        document.querySelector("#notes").appendChild(noteEl)  
    })
}

renderNotes(notes, filters)

// document.querySelector('#add-note').addEventListener('click', function(event) {
//     console.log("Hehhehe, Don't touch me like that ;)")
//     event.target.textContent = "Noughty botton =P"
// })

// document.querySelector('#remove-all').addEventListener('click', function(event) {
//     document.querySelectorAll('.note').forEach(function(note) {
//         note.remove()
//     })
//     console.log("All notes was removed succesfully")
// })

document.querySelector('#create-note').addEventListener('click', function(event) {
    notes.push({
        title: "",
        body: ""
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    
    renderNotes(notes, filters)
})

document.querySelector('#search-notes').addEventListener('input', function(event) {
    filters.searchText = event.target.value
    
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (event) {
    console.log(event.target.value)
})










































// Query and remove
// const p = document.querySelector('p')
// console.log(p.textContent)
// p.remove()



// Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach (function (p){
//     p.remove()
//     console.log(p.textContent)
// })


// Add New element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This paragraph was made from JS'
// document.querySelector('body').appendChild(newParagraph)
