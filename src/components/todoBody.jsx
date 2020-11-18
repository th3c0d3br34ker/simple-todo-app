import { Fragment, useState } from 'react';

import TodoButtons from './todoButtons.jsx';
import TodoItem from './todoItem';
import propTypes from 'prop-types';
import styled from 'styled-components';

const TodoBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 4px double black;
  max-height: 300px;
  min-height: 335px;
  overflow: hidden;
  overflow-y: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    // background: #03045e;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 8px;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
`;

const TodoBody = ({ tasks, toggleComplete, deleteTask }) => {
  const [tasksToDisplay, updateTaskToDisplay] = useState('all');

  let newtasks = tasks;

  const showMarked = () => {
    newtasks = tasks.filter((task) => task.complete);
  };

  const showUnMarked = () => {
    newtasks = tasks.filter((task) => !task.complete);
  };

  if (tasksToDisplay === 'marked') {
    showMarked();
  } else if (tasksToDisplay === 'unmarked') {
    showUnMarked();
  } else {
    newtasks = tasks;
  }

  return (
    <Fragment>
      <TodoButtons
        onShowMarked={() => updateTaskToDisplay('marked')}
        onShowUnMarked={() => updateTaskToDisplay('unmarked')}
        onShowAll={() => updateTaskToDisplay('all')}
      />
      <TodoBodyContainer>
        {newtasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            complete={task.complete}
            toggleComplete={() => toggleComplete(task.id)}
            text={task.text}
            onDeleteTask={() => deleteTask(task.id)}
          />
        ))}
      </TodoBodyContainer>
    </Fragment>
  );
};

export default TodoBody;

TodoBody.propTypes = {
  tasks: propTypes.array,
  toggleComplete: propTypes.func,
  deleteTask: propTypes.func,
};
