    const todoList = [{
      name:'make dinner', 
      dueDate: '2022-12-22',
      description: 'chipsi mayay'
    }, {
      name: 'wash dishes',
      dueDate: '2022-12-22',
      description: 'plates only'
    }];

    renderTodoList();
   
    function renderTodoList() {

    let todoListHtml = '';
    
    
    for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;
      const { name, dueDate, description } = todoObject;
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <div>${description}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Done</button>
      
      `;
      todoListHtml += html;
    }

    document.querySelector('.js-todo-list')
      .innerHTML = todoListHtml;
    }

    function addTodo() {
      const inputElement = document.querySelector('.js-name-input');
      const name = inputElement.value;

      const dateInputElement = document.querySelector('.js-due-date-input');
      const dueDate = dateInputElement.value;

      const descriptionInputElement = document.querySelector('.js-extra-description');
      const description = descriptionInputElement.value;
      
      todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate,
        description
    });
       
      inputElement.value = '';

      renderTodoList();
    }