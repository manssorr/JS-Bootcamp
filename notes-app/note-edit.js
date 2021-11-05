const titleElement = document.querySelector('#note-title')
const bodyElement  = document.querySelector('#note-body')
const removeBTN    = document.querySelector('#remove-note')
const noteId       = location.hash.substring(1)
const lastEditText = document.querySelector('#last-edit');
const backHome     = function () {location.assign('/notes-app/index.html')}
const updateDate   = function (note) {note.updatedAt = timpstamp}

let notes         = getSavedNotes()
let note          = notes.find(function (note) {
    return note.id === noteId
})

// Check if the note is exist
if (note === undefined) {
    backHome()
} else {
    titleElement.value = note.title
    bodyElement.value = note.body
    lastEditText.textContent = generateLastEdited(note.updatedAt);
}

// Change details of note Call
document.querySelector('#note-title').addEventListener('input', function(event){
    note.title = event.target.value
    updateDate(note)
    saveNotes(notes)
    lastEditText.textContent = generateLastEdited(note.updatedAt);
})
document.querySelector('#note-body').addEventListener('input', function(event){
    note.body = event.target.value
    updateDate(note)
    saveNotes(notes)
    lastEditText.textContent = generateLastEdited(note.updatedAt);
})

// Remove this note button setup
removeBTN.addEventListener('click', function(event) {
    removeNote(noteId)
    saveNotes(notes)
    backHome()
})

// Update the inputes all over pages
window.addEventListener('storage', function(event) {
    if (event.key === 'notes'){
        notes        = getSavedNotes()
        note         = notes.find(function (note) {
            return note.id === noteId
        })
        
        // Check if the note is exist
        if (note === undefined) {
            backHome()
        } else {
            titleElement.value = note.title
            bodyElement.value = note.body
            lastEditText.textContent = generateLastEdited(note.updatedAt);
        }
    }
})

