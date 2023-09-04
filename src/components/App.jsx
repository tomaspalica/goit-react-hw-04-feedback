
import { Statistics } from "./Statistics";
import React, { Component } from "react";
import { FeedbackOptions } from "./Feedbackoptions";
import {Section} from "./Section"
import { Notification } from "./Notification";
export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  
  }

  handleClick = state => {
  
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };
         countTotalFeedback = () => {
           const { good, bad, neutral } = this.state;
           return good + bad + neutral;
         }
       
         
         countPositiveFeedbackPercentage =() =>{
           return Math.round((this.state.good / this.countTotalFeedback()) * 100 )
         
         }

  render(){
  return (
    <>
   <Section title ="Please leave feedback">
    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick}/>
   </Section>
   <Section title="Statistics">
    {this.countTotalFeedback() ? (
       <Statistics  good={this.state.good}
       neutral={this.state.neutral}
       bad={this.state.bad}
       total={this.countTotalFeedback()}
       goodPrtge={this.countPositiveFeedbackPercentage()}> </Statistics>
    ):(
<Notification message={"There is no feedback"}></Notification>
    )}
   
   </Section>
   </>
  );}
};
