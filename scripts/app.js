let todoField = document.querySelector('#text-input')
let todoAddBtn = document.querySelector('#add-new-item')
let taskField = document.querySelector('#todo-list')

todoField.addEventListener('keypress', e=>{
    if (e.keyCode == 13) {
        let task = {
            desc: todoField.value,
            id: newId(),
        }
        newTask(task)
    }
})


todoAddBtn.addEventListener('click', e=>{
    let task = {
        desc: todoField.value,
        id: newId(),
    }
    newTask(task)
})


function newId() {
    let n = Math.floor(Math.random() * 3000)
    return n;
}

function newEl(task) {
    let li = document.createElement('li')   // Item na lista
    li.classList.add('todo-item')
    li.id=task.id
    let p = document.createElement('p')     // Texto da lista
    p.classList.add('todo-item-text')
    p.textContent=task.desc
    let div = document.createElement('div')
    div.classList.add('button-wrapper')     // Div Botões
    
    
    let edit = document.createElement('button')
    edit.classList.add('edit')
    edit.setAttribute('onclick', 'edit('+task.id+')')
    let editImg = document.createElement('img')
    editImg.src="img/edit.svg"


    let trash = document.createElement('button')
    trash.classList.add('trash')
    let trashImg = document.createElement('img')
    trashImg.src="img/trash.svg"
    trash.setAttribute('onclick', 'trash('+task.id+')')

    edit.appendChild(editImg)
    trash.appendChild(trashImg)

    div.appendChild(edit)
    div.appendChild(trash)

    li.appendChild(p)
    li.appendChild(div)

    return li 
}

function newTask(task) {
    let item = newEl(task)
    taskField.appendChild(item)
    todoField.value=''
}

function trash(taskId) {document.getElementById(taskId).remove()}


function edit(taskId) {
    let todo = document.getElementById(taskId).childNodes.item(0)
    todo.childNodes.item(0).textContent=window.prompt('New Todo Text:')
}


/*
<li class="todo-item">
    <p class="todo-item-text">Fazer a sua mãe!</p>
    <div class="button-wrapper">
        <button class="edit"><img src="img/edit.svg"></button>
        <button class="trash"><img src="img/trash.svg"></button>
    </div>
</li>
*/