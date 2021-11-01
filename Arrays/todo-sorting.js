// array.pop() removes the last element.
// Array.push() adds elements to the end.

// Array.shift() removes the first element.
// Array.unshift() adds elements to the beginning.

// Array.slice(start, end) returns a shallow copy of an array (start to end) The original array will not be modified.

// Array.splice(start, deleteCount, item1, item2, itemN) changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// Array.indexOf(searchElement, fromIndex) will get the index of first occure of element
// Array.findIndex(element, index, array) will get the index of first occure of element work /// with objects --- findIndex(callbackFn, thisArg)

// Object === Object only if they at the same memory location.

// array.filter() return a new array with the filtered data.

// -------------------------

const todos = [{
    text: 'Order cat food',
    complete: true,
    }, {
    text: 'Clean kitchen',
    complete: false,
    }, {
    text:'Buy food',
    complete: false,
    }, {
    text:'Do work',
    complete: true,
    }, {
    text:'Exercise',
    complete: true,
}]

// -------------------------

todos.sort(function(a, b){
    if (a.complete && !b.complete){
        return 1
    } else if (!a.complete && b.complete){
        return -1
    } else {
        return 0
    }

})

console.log(todos)