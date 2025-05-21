import React, { useState } from "react";
import "./App.css";

function Todo() {
  const [task, setTask] = useState('');
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    setTask(event.target.value);
  }

  function handleAddItemToList(event) {
    event.preventDefault();
    if (task.trim() === '') return;

    
    const newTask = {
      text: task,
      completed: false,
    };

    setItemsList([...itemsList, newTask]);
    setTask('');
  }

  
  function toggleTaskCompletion(index) {
    const updatedList = [...itemsList];
    updatedList[index].completed = !updatedList[index].completed;
    setItemsList(updatedList);
  }

  
  function handleDeleteTask(index) {
    const updatedList = [...itemsList];
    updatedList.splice(index, 1);
    setItemsList(updatedList);
  }

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeInput}
          value={task}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list">
        {itemsList.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span>{item.text}</span>
            <button onClick={() => handleDeleteTask(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
