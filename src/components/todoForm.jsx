import React, { useState } from 'react';

import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 0;
  border: 4px double black;
  padding: 16px;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  outline: none;
  border: 2px solid black;
`;

const AddButton = styled.button`
  float: right;
  width: 50px;
  border: 2px solid black;
  padding: 8px;
  outline: none;
  &:hover {
    background-color: #bbb;
    transform: translateY(2px);
  }
`;

export default function TodoForm(props) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    [event.target.name] = event.target.value;
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text !== '') {
      props.onSubmit({
        id: parseInt(Date.now() % 10000, 10),
        text: text,
        complete: false,
      });
      setText('');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        name="text"
        placeholder="Enter Task"
        value={text}
        onChange={handleChange}
      />
      <AddButton onClick={handleSubmit}>
        <span aria-label="add" role="img">
          ➕
        </span>
      </AddButton>
    </StyledForm>
  );
}

TodoForm.propTypes = {
  onSubmit: propTypes.func,
};
