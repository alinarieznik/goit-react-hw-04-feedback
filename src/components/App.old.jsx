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
  const [goodFeedback, setgoodFeedback] = useState(0);
  const [neutralFeedback, setneutralFeedback] = useState(0);
  const [badFeedback, setbadFeedback] = useState(0);

  const onFeedbackLeave = option => {
    switch (option) {
      case 'good':
        setgoodFeedback(goodFeedback + 1);
        break;
      case 'neutral':
        setneutralFeedback(neutralFeedback + 1);
        break;
      case 'bad':
        setbadFeedback(badFeedback + 1);
        break;
      default:
    }
    // setgoodFeedback(goodFeedback + 1);
    // setneutralFeedback(neutralFeedback + 1);
    // setbadFeedback(badFeedback + 1);
  };

  const countTotalFeedback = () => {
    const amount = goodFeedback + neutralFeedback + badFeedback;
    return amount;
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage = (goodFeedback / countTotalFeedback()) * 100;
    return Math.round(percentage);
  };

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
