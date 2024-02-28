// ASI: Automatic Semicolon Insertion

let pokemonBall = "Tobi"
var student = "Tobi"
const age = 21

// variablen um die HTML komponenten zu fangen und manipulieren
let todolistInputField = document.getElementById("TodoInputField");
let todolistSubmitButton = document.getElementById("addButton");
let todolistBody = document.getElementById("todosList");

function addTodo() {

    //alert("Hurray, you just triggered your first Event with click!");
    let todoInputValue = todolistInputField.value.trim();

    if (todoInputValue !== "") {

        let textNode = document.createTextNode(todoInputValue);

        //alert(todoInputValue);
        let newTodoBody = document.createElement("li");

        newTodoBody.classList.add("list-group-item");

         // adding a delete button
         let deleteButton = document.createElement("button");
         // add text to the button
         deleteButton.textContent = "Delete Todo";
         // add event to the button with click
         deleteButton.onclick = function() {
             // delete the parent of the button which is the LI in newTodoBody
             this.parentElement.remove();
             confetti({
                 // confetti einstellungen
             })

         }


        newTodoBody.appendChild(textNode);

        newTodoBody.appendChild(deleteButton);

        todolistBody.appendChild(newTodoBody);

        confetti({
            // confetti einstellungen
        })

        todolistInputField.value = "";
    }
}

todolistSubmitButton.addEventListener("click", () => {
    addTodo();
})

todolistInputField.addEventListener("keypress", (taste)=>{
    if(taste.key === "Enter"){
    addTodo();
    }
})

function helloWorld() {
    // alert("hello world");
}

helloWorld(); //funktionen müssen zur arbeit gerufen werden ansonsten starten sie nicht