function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todos');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="we' + i + '">X</button></li>';
    };
    html += '</ul>';
    document.getElementById("todos").innerHTML = html;

    var buttons = document.getElementsByTagName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById("add").addEventListener("click", add);
show();

function remove() {
    var id = this.getAttribute("we");
    var todos = get_todos();
    todos.splice(we, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    show();

    return false;
}