import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
  display: block;
  padding: 8px;
  border-bottom: 2px solid black;
  margin: 8px 0;
  width: inherit;
  height: 24px;
`;

const StyledInput = styled.input`
  line-height: 1.2;
  margin-right: 4px;
`;

const StyledSpan = styled.span`
  min-width: 380px;
  padding: 8px 4px;
  text-transform: uppercase;
  font-weight: 600;
`;

const DeleteButton = styled.button`
  color: white;
  float: right;
  background-color: #e41d1d;
  outline: none;
  border: none;
  padding: 4px 8px;
  margin-right: 8px;
  transition: all 200ms ease;
  &:hover {
    background-color: #ff0000;
    transform: translateY(2px);
  }
`;

export default function TodoItem(props) {
  return (
    <Item>
      <StyledInput
        name={props.text}
        type="checkbox"
        id={props.id}
        checked={props.complete}
        value={props.text}
        onChange={props.toggleComplete}
      />
      <label htmlFor={props.id}>
        <StyledSpan
          style={{
            textDecoration: props.complete ? 'line-through' : 'none',
          }}
        >
          {props.text}
        </StyledSpan>
      </label>
      <DeleteButton onClick={props.onDeleteTask}> X </DeleteButton>
    </Item>
  );
}

TodoItem.propTypes = {
  id: propTypes.number,
  text: propTypes.string,
  complete: propTypes.bool,
  toggleComplete: propTypes.func,
  onDeleteTask: propTypes.func,
};
