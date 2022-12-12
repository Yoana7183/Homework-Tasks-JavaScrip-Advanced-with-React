/* -------------------------------- THE TASK -------------------------------- */
// Given is an array of objects: todos.
// Your task is to create a new array of objects: newTodos, which maps the values of todos so that a todo.completed value is inverted for given todoID
// Make sure, that the original todos array is not changed!

const todos = [
    {
      "title": "Lean HMTL",
      "completed": true,
      "id": 1
    },
    {
      "title": "Lean React",
      "completed": false,
      "id": 2
    }
];

const todoID = 2;

/* ----------------------------- YOUR CODE HERE ----------------------------- */
const newTodos = JSON.parse(JSON.stringify(todos))

  newTodos.filter((e)=>{e.id == todoID && e.completed ==false; return e.completed = true})

/* ---------------------------------- TEST ---------------------------------- */
console.log(`Original todos:`, todos);
console.log(`New todos:`, newTodos);

/* ----------------------------- EXPECTED OUTPUT ---------------------------- */
// Original todos: [
//   { title: 'Lean HMTL', completed: true, id: 1 },
//   { title: 'Lean React', completed: false, id: 2 }
// ]
// New todos: [
//   { title: 'Lean HMTL', completed: true, id: 1 },
//   { title: 'Lean React', completed: true, id: 2 }
// ]


