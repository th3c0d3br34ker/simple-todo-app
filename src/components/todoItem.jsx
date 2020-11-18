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

const TodoItem = ({ id, text, complete, toggleComplete, onDeleteTask }) => (
  <Item>
    <StyledInput
      name={text}
      type="checkbox"
      id={id}
      checked={complete}
      value={text}
      onChange={toggleComplete}
    />
    <label htmlFor={id}>
      <StyledSpan
        style={{
          textDecoration: complete ? 'line-through' : 'none',
        }}
      >
        {text}
      </StyledSpan>
    </label>
    <DeleteButton onClick={onDeleteTask}> X </DeleteButton>
  </Item>
);

export default TodoItem;

TodoItem.propTypes = {
  id: propTypes.number,
  text: propTypes.string,
  complete: propTypes.bool,
  toggleComplete: propTypes.func,
  onDeleteTask: propTypes.func,
};
