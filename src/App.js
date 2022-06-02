import React, { Component } from 'react';

import Section from  "./components/Section/Section";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
}


    updateFeedbackCount = (k) => {
    this.setState((state) => ({ [k]: state[k] + 1 }));
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