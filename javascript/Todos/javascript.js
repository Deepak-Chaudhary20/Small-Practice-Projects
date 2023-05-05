const form = document.getElementById('form');
const input = document.getElementById('todolist');
const todos = document.getElementById('adding');

const fetTodos = JS



if(fetTodos){
    fetTodos.forEach((todo) =>{
        addTodo(todo);
        console.log(todo)
    });
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
    LocalStoreNotes();
});


function addTodo(todo){
    let TodoText = input.value;
    if(todo){
        TodoText  = todo.text;
    }
    if(TodoText){
        const todolist = document.createElement('li');
        if(todo && todo.completed){
            todolist.classList.add('active');
        }
        todolist.innerText = TodoText;
        //Right Double click contentmenu
        todolist.addEventListener('dblclick', function(e){
            e.preventDefault();
            todolist.remove();
            LocalStoreNotes();
        });
        todolist.addEventListener('click', function(e){
            todolist.classList.add('active');
            LocalStoreNotes();
        });
        todos.appendChild(todolist);
        input.value = '';
        todos.classList.add('active');
    }
}

function LocalStoreNotes(){
    const localTodos = document.querySelectorAll('li');

    let StoreToDo = [];
    localTodos.forEach((localTodo) => {
        StoreToDo.push({
            text: localTodo.innerText,
            completed: localTodo.classList.contains('active')
        });
    });
    localStorage.setItem('StoreToDo', JSON.stringify(StoreToDo));
}
