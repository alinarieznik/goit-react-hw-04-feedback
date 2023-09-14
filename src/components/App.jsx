// import { Component } from 'react';
// import { Section } from 'components/Section/Section';
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Notification } from 'components/Notification/Notification';
// import { Statistics } from 'components/Statistics/Statistics';
// import { StyledContainer } from './App.styled';

// export class App extends Component {
//   // return (
//   //   <div
//   //     style={{
//   //       height: '100vh',
//   //       display: 'flex',
//   //       justifyContent: 'center',
//   //       alignItems: 'center',
//   //       fontSize: 40,
//   //       color: '#010101',
//   //     }}
//   //   ></div>
//   // );

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onFeedbackLeave = name => {
//     this.setState(pState => {
//       return {
//         [name]: pState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const amount = Object.values(this.state).reduce((total, option) => {
//       return total + option;
//     }, 0);
//     return amount;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const percentage = (this.state.good / this.countTotalFeedback()) * 100;
//     return Math.round(percentage);
//   };

//   render() {
//     let statsContent;
//     if (this.countTotalFeedback()) {
//       statsContent = (
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         ></Statistics>
//       );
//     } else {
//       statsContent = (
//         <Notification message="There is no feedback"></Notification>
//       );
//     }
//     return (
//       <StyledContainer>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onFeedbackLeave}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">{statsContent}</Section>
//       </StyledContainer>
//     );
//   }
// }

// import { Component } from 'react';
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
