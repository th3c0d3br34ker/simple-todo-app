import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 4px solid black;
  padding: 8px;
  outline: none;
  transition: all 200ms ease;
  &:hover {
    background-color: #bbb;
    transform: translateY(2px);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
`;

const TodoButtons = ({ onShowAll, onShowMarked, onShowUnMarked }) => (
  <ButtonWrapper>
    <StyledButton onClick={onShowMarked}>Marked TODOs</StyledButton>
    <StyledButton onClick={onShowUnMarked}>Unmarked TODOs</StyledButton>
    <StyledButton onClick={onShowAll}>All TODOs</StyledButton>
  </ButtonWrapper>
);

export default TodoButtons;

TodoButtons.propTypes = {
  onShowMarked: propTypes.func,
  onShowUnMarked: propTypes.func,
  onShowAll: propTypes.func,
};
