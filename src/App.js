import { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'Components/Section';
import FeedbackOptions from 'Components/FeedbackOptions';
import Statistics from 'Components/Statistics';
import Notification from 'Components/Notification';

import './App.css';

class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleFeedback = ({ target }) => {
    this.setState(prevState => {
      const { name } = target;
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = (...args) => args.reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = (good, total) =>
    total !== 0 ? Math.round((good / total) * 100) : 0;

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback(good, bad, neutral);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />

        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage(
              good,
              total,
            )}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default App;
