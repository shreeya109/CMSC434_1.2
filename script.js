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
    'tab2': `
        <div class="tab-content">
            <h1>Choices</h1>
            <div>
                <label>Hat color #1:</label><br>
                <input type="radio" id="red" name="hatColor1" value="Red" checked> Red<br>
                <input type="radio" id="blue" name="hatColor1" value="Blue"> Blue<br><br>
                <label for="hatColor2">Hat color #2:</label><br>
                <select id="hatColor2">
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                </select><br><br>
                <button onclick="displayHatChoice()">Print something based on above choices...</button>
                <div id="result"></div>
            </div>
        </div>`,
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
    'tab4': `
        <div class="tab-content">
            <h1>Profile</h1>
            <div class="profile-content">
                <img src="assets/smiley-face.png" alt="Profile Image" id="profile-image">
                <div class="profile-name">Smiley J. Smile</div>
                <div class="notification" id="notification">
                    <strong>Warning!</strong> Do not click on the profile image.
                    <span class="close-notification" id="close-notification">&times;</span>
                </div>
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
    if (tab === 'tab4') initializeProfile();
}


function initializeProfile() {
    const profileImage = document.getElementById('profile-image');
    const notification = document.getElementById('notification');
    const closeNotification = document.getElementById('close-notification');

    notification.style.display = 'none'; 

    profileImage.addEventListener('click', function () {
        notification.style.display = 'block'; 
    });

    closeNotification.addEventListener('click', function () {
        notification.style.display = 'none'; 
    });
}

function displayHatChoice() {
    const hatColor1 = document.querySelector('input[name="hatColor1"]:checked').value;
    const hatColor2 = document.getElementById('hatColor2').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>You chose Hat color #1: ${hatColor1} and Hat color #2: ${hatColor2}</p>`;
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
        completeBtn.className = 'complete-btn'; 
        completeBtn.innerHTML = '<img src="assets/checked.png" alt="Complete" style="width: 20px; height: 20px;">';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn'; 
        deleteBtn.innerHTML = '<img src="assets/delete-symbol-option.png" alt="Delete" style="width: 20px; height: 20px;">'; 

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';
        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(buttonContainer);
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

switchTab('tab1');
