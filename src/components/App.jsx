import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { StyledContainer } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackLeave = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = () => {
    const amount = good + neutral + bad;
    return amount;
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage = (good / countTotalFeedback()) * 100;
    return Math.round(percentage);
  };

  let statsContent;
  if (countTotalFeedback()) {
    statsContent = (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Statistics>
    );
  } else {
    statsContent = <Notification message="There is no feedback"></Notification>;
  }
  return (
    <StyledContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onFeedbackLeave}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">{statsContent}</Section>
    </StyledContainer>
  );
};
