/**
 * Declaring constants and variables for further use
 */

const todotextInput = document.querySelector("#todo");
const todoAddButton = document.querySelector(".add");
const listOfTodo = document.querySelector(".todo-list");

/*Logic Starts
*/

function getTodoText() {
         return todotextInput.value;
}

todoAddButton.addEventListener("click", (e) => {
         let todoItem = getTodoText();
         if (todoItem == "") {
                  return;
         } else {
                  const newTodoContent = document.createTextNode(todoItem);
                  const newTodo = document.createElement("li");

                  newTodo.append(newTodoContent);
                  listOfTodo.append(newTodo);

         }
})

