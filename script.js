const input = document.querySelector('#input')
const list = document.querySelector('.todos')
const form = document.querySelector('#form')

form.addEventListener('submit', (e)=>{
   e.preventDefault()
   const texTodo = input.value
   


    const li = document.createElement('li')
    li.classList.add('todo-item')
    li.textContent = texTodo
    list.appendChild(li)
})

list.addEventListener('contextmenu', (event) => {
    event.target.remove(list)
  })

list.addEventListener('click', (e)=>{
  e.target.classList.toggle('completed')
})

