const input = document.getElementById('todoInput');
const addBtn = document.querySelector('#addBtn');
const todos = document.querySelector('.todos');
addBtn.addEventListener('click',()=>{
    const text = input.value.trim(); 
    
    // if user clicks add w/o entering input
    if(!text) return;

    const div = document.createElement("div");
    div.className = "todo";
    div.innerHTML = `<div>${text}</div>
                    <button class="edit">edit</button>
                    <button class="delete">delete</button>`;
    todos.appendChild(div);
    input.value = "";
})

todos.addEventListener('click',(e)=>{
    const todo = e.target.closest('.todo');
    if(!todo) return;
    
    //checking if delete was clicked    
    if(e.target.classList.contains('delete')){
        todo.remove();
    }

    // checking if edit was clicked
    if(e.target.classList.contains("edit")){
        const textDiv = todo.firstElementChild;
        const newText = prompt("Edit todo:")
        if(newText!==null && newText.trim()){
            textDiv.textContent = newText.trim()
        }
    }
})