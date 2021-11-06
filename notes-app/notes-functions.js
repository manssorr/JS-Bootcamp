'use strict'

const timpstamp = moment().valueOf()

// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Removing a note when clicking x by ID
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const button = document.createElement('button')
    const textEl = document.createElement('a')

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    textEl.setAttribute('href', `/notes-app/edit.html#${note.id}`)
    
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        note.title = 'Unnamed note'
        textEl.textContent = note.title
    }
    noteEl.appendChild(textEl)
    return noteEl
}

// sorted by setup
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        console.log(sortBy)
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
            return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        console.log(sortBy)
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        console.log(sortBy)
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase() ) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
} 

// Render application notes
const renderNotes = (notes, filters) => {
    sortNotes (notes, filters.sortBy)

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Generate last edit time 
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`