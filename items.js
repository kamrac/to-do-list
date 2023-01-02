/* 
1. DOM Elements
1. create a function that takes in user input
2. add it to an array (list)
3. display the list on page
4. Add checkbox, if user click checkbox cross it off the list
*/

// declare variables from HTML
const toDoInput = document.getElementById("info");
const button = document.getElementById("btn");
const postsForm = document.getElementById("postsForm");
const displayItem = document.querySelector(".displayItems");

// add new items to array 
const addItem = (toDo) => {
    items.push ({toDo})
    return toDo;
    
};

// function to create to do list
const createToDoListElement = ({toDo}) => {

    //create elements
    const displayDiv = document.createElement("div");
    const toDoItem = document.createElement("p");

    //add in items
    toDoItem.innerText = toDo;
    console.log(toDo);
    // add to the DOM
    displayDiv.append(toDoItem);
    displayItem.appendChild(displayDiv);
};

// array list for to do list items
   const items = [];


//display item from local storage 
// const items = JSON.parse(localStorage.getItem("items")) || [];




// call the array
items.forEach(createToDoListElement);

postsForm.onsubmit = e => {
    e.preventDefault();

    const newItem = addItem(toDoInput.value);
    console.log(newItem);
    createToDoListElement(newItem);
    console.log(createToDoListElement(newItem));

    toDoInput.value = "";
};
// // add items to local storage 
// localStorage.setItem("items", JSON.stringify(items));
// postsForm.onsubmit = (e) => {
//     e.preventDefault();
//     //save data to local storage using setItem. Pass the correct data
//     localStorage.setItem("toDoList", JSON.stringify());
//         const newItem = addItem(
//         toDoInput.value
//    );
//     // Clear Form 
//     toDoInput.value = "";
// };