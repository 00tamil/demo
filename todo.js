// selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//add event listner 
todoButton.addEventListener('click',Todo);
todoList.addEventListener('click',deleteCheck)
//function 
function Todo(event){

    event.preventDefault();
    //todo div
    
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li 
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    todoInput.value= '' ;
    //create check mark 
    const compeletedButton = document.createElement('button')
    compeletedButton.innerHTML ='<i>compeleted</i>';
    compeletedButton.classList.add('compelete-btn')
    todoDiv.appendChild(compeletedButton)
    // delete button 
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML ='<i> deleted</i>'
    deleteButton.classList.add('delete-btn')
    todoDiv.appendChild(deleteButton)
    todoList.appendChild(todoDiv)
    
}

function deleteCheck(e){
    let item = e.target
    console.log(item)
    if(item.classList[0] == 'delete-btn'){
       const memory=  item.parentElement;
       memory.classList.add("fall")
       
       memory.addEventListener('transitionend',function(){
        memory.remove();
       })    
    }
    let item1= e.target

    if(item1.classList[0] == 'compelete-btn'){
        const memory1=  item1.parentElement;
        memory1.classList.toggle('compelete')
        
     }

}

function filterTodo(e){
    const todos= todoList.childNodes;
    todos.forEach((todo)=>{
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
               case "compeleted":
                if(todo.classList.contains('compeleted')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                } 
        }
    })
}