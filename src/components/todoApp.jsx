import { useEffect, useState } from 'react';

import TodoBody from './todoBody.jsx';
import TodoForm from './todoForm.jsx';
import styled from 'styled-components';

const TodoHeadingWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const TodoMain = styled.div`
  display: block;
  min-width: 420px;
  height: 600px;
`;

const TodoApp = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todo-app-data'));
    if (data) {
      setTask(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo-app-data', JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = (task) => {
    setTask([...tasks, task]);
  };

  const toggleComplete = (id) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete,
          };
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((tasks) => tasks.id !== id));
  };

  return (
    <TodoMain>
      <TodoHeadingWrapper>
        <h1>
          <span aria-label="note" role="img">
            📝
          </span>{' '}
          TO DO APP
        </h1>
      </TodoHeadingWrapper>
      <TodoForm onSubmit={addTodo} />
      <TodoBody
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </TodoMain>
  );
};

export default TodoApp;
