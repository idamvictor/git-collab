
        const addBtn = document.getElementById('add-btn');
        const todoInput = document.getElementById('todo-input');
        const todoList = document.getElementById('todo-list');

        addBtn.addEventListener('click', () => {
            const todoText = todoInput.value.trim();
            if (todoText !== '') {
                const todoItem = document.createElement('li');
                todoItem.className = 'todo-item';
                todoItem.innerHTML = `
                    <input type="checkbox">
                    <span>${todoText}</span>
                    <button class="delete-btn">Delete</button>
                `;
                todoList.appendChild(todoItem);
                todoInput.value = '';

                // Delete button functionality
                const deleteBtn = todoItem.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => {
                    todoItem.remove();
                });
            }
        });
    