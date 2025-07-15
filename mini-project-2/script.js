let tasks = [];
// let result = '';

if(localStorage.getItem('tasks')){
    tasks = JSON.parse(localStorage.getItem('tasks'));
    renderResult();
}

function Dikhao(){
    if(document.querySelector('.search').value === '') return;
    const todoWork = document.querySelector('.search').value;
    const todoDate = document.querySelector('.date').value;
    console.log(tasks.push({Work:todoWork , Date:todoDate}));
    renderResult();
    saveTask();
    document.querySelector('.search').value = '';
    document.querySelector('.date').value = '';
}

function renderResult(){
    let shower = document.querySelector('.shower');
    shower.innerHTML = ''; 
    tasks.forEach(function(task, index){
        shower.innerHTML += `
                <div><strong>${task.Work}</strong></div>
                <div>${task.Date}</div>
                <button onclick="
                    deleteTask(${index});
                " class="delete-button-js">
                    Delete
                </button>       
                `
    }
)
}

function deleteTask(index){
    tasks.splice(index, 1);
    saveTask();
    renderResult();   
}

function saveTask(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.querySelector('.search').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            Dikhao();
        }
    });