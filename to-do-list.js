const todoNameBox = document.getElementById("todoNameBox");
const todoDateBox = document.getElementById("todoDateBox");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const errorToDoName = document.getElementById("errorToDoName");
const errorToDoDate = document.getElementById("errorToDoDate");


let todoArrayName = [];
let todoArrayDate = [];

addBtn.onclick = function add()
{

    // logic for errors

    if ( todoNameBox.value == "" && todoDateBox.value == "" )
    {
        errorToDoName.textContent = "*Enter a name";
        errorToDoDate.textContent = "*Enter a date";
    }

    else if ( todoNameBox.value == "" )
    {
        errorToDoName.textContent = "*Enter a name";

        if ( errorToDoDate != " " )
        {
            errorToDoDate.textContent = "‎";
        }
    }

    else if ( todoDateBox.value == "" )
    {
        errorToDoDate.textContent = "*Enter a date";

        if ( errorToDoName != " " )
            {
                errorToDoName.textContent = "‎";
            }
    }

    // main logic

    else
    {
        errorToDoName.textContent = "‎";
        errorToDoDate.textContent = "‎";
    

        let arrayLenght = todoArrayName.length + 1;

        let listHTML = ``;

        todoArrayName.push(todoNameBox.value);
        todoArrayDate.push(todoDateBox.value);

        for ( let i = 0; i < arrayLenght; i++ )
        {
            let todoId = i;
            listHTML += `<div class="container" id="todo-${todoId}"><span id="removeName${todoId}">${todoArrayName[i]}</span>
                         <span class="todoDate" id="removeDate${todoId}">${todoArrayDate[i]}</span>
                         <button class="deleteBtn" id="delete-${todoId}">Delete</button></div>`;
        }

        list.innerHTML = listHTML;


        todoNameBox.value = '';
        todoDateBox.value = '';


        const deleteBtn = list.querySelectorAll(".deleteBtn");

        deleteBtn.forEach(button => 
            {
                button.onclick = function deletee()
                {
                    const todoId = button.id.split("-")[1]; // split = splits the string to parts from the symobol we typed (not including it)
                                                            // making array within is each part
                                                            // and the number indicates witch index we gonna use from the array
                    const todoDiv = document.getElementById(`todo-${todoId}`);
                    const removeName = document.getElementById(`removeName${todoId}`);
                    const removeDate = document.getElementById(`removeDate${todoId}`);
                    todoArrayName = todoArrayName.filter(element => element != removeName.textContent);
                    todoArrayDate = todoArrayDate.filter(element => element != removeDate.textContent);
                    todoDiv.remove();

                }
            })
    }
}


