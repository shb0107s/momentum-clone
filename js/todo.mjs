export default function todo() {
    const form = document.querySelector(".js-toDoForm");
    const input = form.querySelector("input");
    const list = document.querySelector(".js-toDoList");
    let toDos = [];
    
    const TODOS_LS = 'toDos';
    
    
    init();
    

    function init() {
        loadTodos();
        form.addEventListener("submit", handleSubmit);
    }


    function loadTodos() {
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){
            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach((toDo) => paintToDo(toDo.text));
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        const currentvalue = input.value;
        paintToDo(currentvalue);
        input.value = "";
    }
    

    function paintToDo(text) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = toDos.length === 0? 1 : toDos[toDos.length-1]["id"] +1;

        delBtn.innerText = "❌";
        delBtn.classList.add("delBtn");
        delBtn.addEventListener("click", deleteToDo);
        span.innerText = text;
        li.appendChild(delBtn);
        li.appendChild(span);
        li.id = newId;
        list.appendChild(li);

        const toDoObj = {
            text: text,
            id: newId
        }
        toDos.push(toDoObj);
        saveToDos();
    }


    function saveToDos() {
        localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    }


    function deleteToDo(event) {
        const btn = event.target;
        const li = btn.parentNode;
        const cleanToDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id, 10));
        li.remove();
        toDos = cleanToDos;
        saveToDos();
    }

    

    
    

    

}







