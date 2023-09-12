import { StyledStatisticsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StyledStatisticsList>
      <li>
        <p>
          Good:
          <span>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral:
          <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad:
          <span>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total:
          <span>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive Feedback:
          <span>{positivePercentage}%</span>
        </p>
      </li>
    </StyledStatisticsList>
  );
};
