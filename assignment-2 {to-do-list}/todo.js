//Selector
var todoinput = document.querySelector(".todo-input");
var todobtn = document.querySelector(".todo-btn");
var todolist = document.querySelector(".todo-list");


//Event Handler
todobtn.addEventListener("click",create);
todolist.onclick = checkdelete;


//Function
function create(e)
{
    e.preventDefault();
    if(todoinput.value)
    {
        var newDiv = document.createElement('div');
        newDiv.classList.add('todo');

        var newItem = document.createElement('li')
        newItem.innerHTML = todoinput.value;
        todoinput.value = "";
        newItem.classList.add('todo-listItem');
        newDiv.appendChild(newItem);

        var checkbtn = document.createElement('button');
        checkbtn.classList.add('checkicon');
        checkbtn.innerHTML = '<i class="fas fa-check"></i>';
        newDiv.appendChild(checkbtn);

        var deletebtn = document.createElement('button');
        deletebtn.innerHTML = '<i class="fas fa-trash"></i>';
        deletebtn.classList.add('deleteicon');
        newDiv.appendChild(deletebtn);

        todolist.appendChild(newDiv);
    }
    else
    {
        alert("Please enter any list item!");
    }
    
}

function checkdelete(e)
{
    var item = e.target;
    if(item.classList[0]==="deleteicon")
    {
        item.parentNode.remove();
    }
    if(item.classList[0]==="checkicon")
    {
        item.parentNode.classList.toggle('completed');
    }
}
