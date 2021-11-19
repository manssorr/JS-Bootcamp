'use strict'

let notes = getSavedNotes()


const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

// Add new note button Call
document.querySelector('#create-note').addEventListener('click', () => {
    const id = uuidv4()
    notes.push({
        id,
        title: '',
        body: '',
        createdAt: timpstamp,
        updatedAt: timpstamp
    })
    saveNotes(notes)
    location.assign(`./edit.html#${id}`)
})

// Filtered by text Call
document.querySelector('#search-text').addEventListener('input', (event) => {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

// Filtered by list Call
document.querySelector('#sorted-by').addEventListener('change', (event) => {
    filters.sortBy = event.target.value
    renderNotes(notes, filters)
})

// refresh notes list while editing at same time
window.addEventListener('storage', (event) => {
    if (event.key === 'notes') {
        notes = getSavedNotes()
        renderNotes(notes, filters)
    }
})