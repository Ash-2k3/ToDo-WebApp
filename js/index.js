/**
 * Declaring constants and variables for further use
 */

const todotextInput = document.querySelector("#todo");
const todoAddButton = document.querySelector(".add");
const listOfTodo = document.querySelector(".todo-list");
// const crossBtn = document.


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
                  const crossSymbol = document.createElement("i");
                  crossSymbol.classList.add("bx");
                  crossSymbol.classList.add("bx-x");

                  const newTodoContent = document.createTextNode(todoItem);
                  const newTodo = document.createElement("li");

                  newTodo.append(newTodoContent);
                  newTodo.append(crossSymbol);
                  listOfTodo.append(newTodo);

         }
         todotextInput.value = "";
})

listOfTodo.addEventListener("click", (e) => {
         // const li = e.target.tagName;
         if (e.target.tagName === 'I') {
                  const li = e.target.parentNode;
                  console.log(li);
                  listOfTodo.removeChild(li);

         } else {
                  return;
         }
})






