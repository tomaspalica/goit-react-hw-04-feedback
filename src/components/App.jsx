
import { Statistics } from "./Statistics";
import React, { Component, useState } from "react";
import { FeedbackOptions } from "./Feedbackoptions";
import {Section} from "./Section"
import { Notification } from "./Notification";

export const App = () => {
const [good,setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const options = ['good', 'neutral','bad']
const handleClick = event => {
  
  switch (event){
    case('good'):
    setGood(good + 1);
    break;
    case('neutral'):
    setNeutral(neutral + 1);
    break;
    case("bad"):
    setBad(bad + 1);
    break;
  }
   
  };
        const countTotalFeedback = () => {
           
           return good + bad + neutral;
         }
       
         
         const countPositiveFeedbackPercentage =() =>{
           return Math.round((good / countTotalFeedback()) * 100 )
         
         }

 
  return (
    <>
   <Section title ="Please leave feedback">
    <FeedbackOptions options={options} onLeaveFeedback={handleClick}/>
   </Section>
   <Section title="Statistics">
    {countTotalFeedback() ? (
       <Statistics  good={good}
       neutral={neutral}
       bad={bad}
       total={countTotalFeedback()}
       goodPrtge={countPositiveFeedbackPercentage()}> </Statistics>
    ):(
<Notification message={"There is no feedback"}></Notification>
    )}
   
   </Section>
   </>
  );}

