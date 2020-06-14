export default class {
    constructor(){
        this.form = document.querySelector(".js-toDoForm");
        this.input = this.form.querySelector("input");
        this.list = document.querySelector(".js-toDoList");
        this.TODOS_LS = 'toDos';
        this.toDos = [];
    }

    deleteToDo = (event) => {
        const btn = event.target;
        const li = btn.parentNode;
        const cleanToDos = this.toDos.filter((toDo) => toDo.id !== parseInt(li.id, 10));
        li.remove();
        this.toDos = cleanToDos;
        this.saveToDos();
    }

    saveToDos = () => {
        localStorage.setItem(this.TODOS_LS, JSON.stringify(this.toDos));
    }

    paintToDo = (text) => {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = this.toDos.length === 0? 1 : this.toDos[this.toDos.length-1]["id"] +1;

        delBtn.innerText = "❌";
        delBtn.addEventListener("click", this.deleteToDo);
        span.innerText = text;
        li.appendChild(delBtn);
        li.appendChild(span);
        li.id = newId;
        this.list.appendChild(li);

        const toDoObj = {
            text: text,
            id: newId
        }
        this.toDos.push(toDoObj);
        this.saveToDos();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const currentvalue = this.input.value;
        this.paintToDo(currentvalue);
        this.input.value = "";
    }

    loadTodos = () => {
        const loadedToDos = localStorage.getItem(this.TODOS_LS);
        if(loadedToDos !== null){
            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach((toDo) => this.paintToDo(toDo.text));
        }
    }

    init(){
        this.loadTodos();
        this.form.addEventListener("submit", this.handleSubmit);
    }
}







