import React, { Component } from 'react';

import Section from  "./components/Section/Section";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
}
  updateFeedbackCount = option => {
    this.setState(prevState => {
      const feedbackOption = option.toLowerCase();
      return {
        [feedbackOption]: prevState[feedbackOption] + 1,
      };
    });
  };
  
  render() {
  

    return (
      <div className="container">
        <Section title="Please leave feedback">
            <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.updateFeedbackCount}
          />
        </Section>
        <Section title="Statistics">

        </Section>
      </div> 
    );
  }
}

export default App;