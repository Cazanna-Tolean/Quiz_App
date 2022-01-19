import React from 'react';
//Types
import {AnswerObject} from '../App';
//Styles
import {Wrapper, ButtonWrapper} from './QuestionCard.style';

type Props={
    question:string;
    answers:string[];
    callback:(e:React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer:AnswerObject|undefined;
    questionNr:number;
    totoalQuestions:number;
}

const QuestionCard=({question,answers,callback,userAnswer,questionNr,totoalQuestions}:Props)=>(
    <Wrapper>
        <p className="number">
            Question: {questionNr} / {totoalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html:question}}/>
        <div>
            {answers.map((oneAnswer)=>(
                <ButtonWrapper key={oneAnswer} 
                    correct={userAnswer?.correctAnswer===oneAnswer }
                    userClicked={userAnswer?.answer===oneAnswer}
                >
                    <button disabled={!!userAnswer} value={oneAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:oneAnswer}}></span>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard;