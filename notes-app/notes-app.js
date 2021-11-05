let notes = getSavedNotes()


const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

// Add new note button Call
document.querySelector('#create-note').addEventListener('click', function () {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timpstamp,
        updatedAt: timpstamp
    })
    saveNotes(notes)
    location.assign(`/notes-app/edit.html#${id}`)
})

// Filtered by text Call
document.querySelector('#search-text').addEventListener('input', function (event) {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

// Filtered by list Call
document.querySelector('#sorted-by').addEventListener('change', function (event) {
    filters.sortBy = event.target.value
    renderNotes(notes, filters)
})

// refresh notes list while editing at same time
window.addEventListener('storage', function (event) {
    if (event.key === 'notes') {
        notes = getSavedNotes()
        renderNotes(notes, filters)
    }
})