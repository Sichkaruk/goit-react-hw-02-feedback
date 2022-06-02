import React, { Component } from 'react';

import Section from  "./components/Section/Section";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
}


    updateFeedbackCount = (k) => {
    this.setState((state) => ({ [k]: state[k] + 1 }));
    };
  
    TotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

    PositivePercentage = () => {
    return Math.round((this.state.good * 100) / this.TotalFeedback());
  };
  
  render() {
    
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className="container">
        <Section title="Please leave feedback">
            <FeedbackOptions
            options={options}
            onLeaveFeedback={this.updateFeedbackCount}
          />
        </Section>

        <Section title="Statistics">
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbackCount={this.TotalFeedback}
            positiveFeedback={this.PositivePercentage}
          />
        </Section>
      </div> 
    );
  }
}

export default App;