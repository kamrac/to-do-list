/* 
1. DOM Elements
1. create a function that takes in user input
2. add it to an array (list)
3. display the list on page
4. Add checkbox, if user click checkbox cross it off the list
*/

// declare variables from HTML
const toDoInput = document.getElementById("info");
const postsForm = document.getElementById("postsForm");
const displayItem = document.querySelector(".displayItems");


// array list for to do list items
const items = [];


// add new items to array 
const addItem = (toDo) => {
    const newItem = { toDo };
    items.push ({newItem});
    return newItem;
    
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


// call the array
items.forEach(createToDoListElement);

postsForm.onsubmit = (e) => {
    e.preventDefault();

    const newItem = addItem(toDoInput.value);

// Call createToDoListElement here once when adding the item

    createToDoListElement(newItem);

    toDoInput.value = "";
};
