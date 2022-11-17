const input = document.getElementById('input')
const form = document.getElementById('form')
const todos = document.getElementById('todos')

const data = JSON.parse(localStorage.getItem('todos')) ?? []

if (data) {
  data.forEach((item) => addTodo(item))
}

function addTodo(todo) {
  let todoText = input.value
  if (todo) {
    todoText = todo
  }
  if (todoText) {
    const todoEl = document.createElement('li')
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }
    todoEl.textContent = todoText
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      sync()
    })
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoEl.remove()
      sync()
    })

    todos.appendChild(todoEl)
    input.value = ''
    sync()
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addTodo(e.target.value)
})

function sync() {
  const todoEls = document.querySelectorAll('li')

  const todos = []

  todoEls.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}
