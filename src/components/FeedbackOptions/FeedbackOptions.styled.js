import styled from 'styled-components';

export const StyledFeedbackList = styled.ul`
  display: flex;
  list-style: none;
  gap: 7px;
  padding-left: 15px;
`;

export const StyledButton = styled.button`
  border: 1px solid #e3e6e7;
  border-radius: 4px;
  background: white;
  &:hover , &: focus {
    background-color: blue;
  }
`;
