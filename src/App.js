import { useState } from 'react';
import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  

  const clickHandler = event => {
    // eslint-disable-next-line
    switch (event.target.name) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <Container>
        <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={clickHandler} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
    </Container>
  );
};

export default App;