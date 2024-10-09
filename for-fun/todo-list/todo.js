document.querySelector('.add-button').addEventListener('click', function() {
    // Get the value from the input field
    const inputField = document.querySelector('.todo-input');
    const taskText = inputField.value.trim();
  
    // Check if input is not empty
    if (taskText !== '') {
      // Create a new list item
      const newTask = document.createElement('li');
      newTask.classList.add('todo-item');
  
      // Create a span for the task text
      const taskTextSpan = document.createElement('span');
      taskTextSpan.classList.add('task-text');
      taskTextSpan.textContent = taskText;
  
      // Create a complete button
      const completeButton = document.createElement('button');
      completeButton.classList.add('complete-button');
      completeButton.textContent = 'Complete';
  
      // Create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
  
      // Append the task text, complete button, and delete button to the new task
      newTask.appendChild(taskTextSpan);
      newTask.appendChild(completeButton);
      newTask.appendChild(deleteButton);
  
      // Append the new task to the list
      document.querySelector('.todo-list').appendChild(newTask);
  
      // Clear the input field
      inputField.value = '';
    }
  });
  