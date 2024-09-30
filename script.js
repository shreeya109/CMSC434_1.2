const tabContents = {
    'tab1': `
        <div class="tab-content">
            <h1>Text</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div> `,
    'tab3': `
        <div class="tab-content">
            <h1>ToDo List</h1>
            <div class="todo-list-container">
                <input type="text" id="todo-input" class="todo-input" placeholder="Add a new task..." />
                <button id="add-btn">Add Task</button>
                <ul id="todo-list" class="todo-list"></ul>
            </div>
        </div>
    `,
    'tab5': `
        <div class="tab-content">
            <h1>Colors</h1>
            <div class="line1" style="color:yellow; background-color:black; padding:10px; font-size:22px; font-weight:bold;">Hello There</div>
            <div class="line2" style="color:purple; background-color:yellow; padding:10px; font-size:22px; font-weight:bold;">Hi Again</div>
        </div>
    `,
    'tab6': `
        <div class="tab-content">
            <h1>Lower Right</h1>
            <div class="lower-right-content">Down Here</div>
        </div>
    `
};

function switchTab(tab) {
    document.getElementById('tab-content').innerHTML = tabContents[tab];
    if (tab === 'tab3') initializeToDo();
}

function initializeToDo() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', function () {
        const taskText = todoInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn'; // Add class for styling
        completeBtn.innerHTML = '<img src="assets/checked.png" alt="Complete" style="width: 20px; height: 20px;">';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn'; // Add class for styling
        deleteBtn.innerHTML = '<img src="assets/delete-symbol-option.png" alt="Delete" style="width: 20px; height: 20px;">'; 

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container'; // Create a container for the buttons
        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(buttonContainer); // Append button container instead of buttons directly
        todoList.appendChild(li);

        todoInput.value = '';

        completeBtn.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', function () {
            todoList.removeChild(li);
        });
    });
}

// Switch to the first tab by default
switchTab('tab1');
