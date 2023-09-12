import { StyledFeedbackList, StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledFeedbackList>
      {options.map(option => (
        <li key={option}>
          <StyledButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </StyledButton>
        </li>
      ))}
    </StyledFeedbackList>
  );
};
