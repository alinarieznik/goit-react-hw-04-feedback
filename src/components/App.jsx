import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { StyledContainer } from './App.styled';

export const App {
  const [goodFeedback, setgoodFeedback] = useState([0]);
const [neutralFeedback, setneutralFeedback] = useState([0]);
const [badFeedback, setbadFeedback] = useState([0]);


  const onFeedbackLeave = ({goodFeedback, neutralFeedback, badFeedback})  => {
    setgoodFeedback(prevItems => {
      return {[goodFeedback]: prevItems[goodFeedback] + 1}
    })
        setneutralFeedback(prevItems => {
      return {[neutralFeedback]: prevItems[neutralFeedback] + 1}
        })
        setbadFeedback(prevItems => {
      return {[badFeedback]: prevItems[badFeedback] + 1}
    })
  };

  const countTotalFeedback = () => {
    const amount = goodFeedback + neutralFeedback +badFeedback;
    return amount;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (goodFeedback / countTotalFeedback()) * 100;
    return Math.round(percentage);
  };

  return (
    let statsContent;
    if (countTotalFeedback()) {
      statsContent = (
        <Statistics
          good={goodFeedback}
          neutral={neutralFeedback}
          bad={badFeedback}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      );
    } else {
      statsContent = (
        <Notification message="There is no feedback"></Notification>
      );
    }
    return (
      <StyledContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={option}
            onLeaveFeedback={onFeedbackLeave}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">{statsContent}</Section>
      </StyledContainer>
    );
  )
}
