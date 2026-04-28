import {useState} from 'react';  
import QUESTIONS from './questions.js';


export default function Quiz() {  
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(setUserAnswers) {
        setUserAnswers((prevUserAnswers) =>  {
          return [...prevUserAnswers, setUserAnswers];      
        });
    }

    return  <div>
          <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text} </h2>    
    <ul id="answers">
       {QUESTIONS[activeQuestionIndex].answers.map(answers => <li key={answers} className='answer'> 
        <button onClick={() =>  handleSelectAnswer()}>{answers}</button> 
       </li>
     )}     
    </ul> 
    </div> 
 </div>
}


