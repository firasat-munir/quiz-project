import React from 'react';
import { ButtonWrapper, Wrapper } from "./QuestionCard.styles";


type Props={
    question:string;
    answers:string[];
    callback:any;
    userAnswer:any;
    questionNum:number;
    totalQuestions:number;
}

export const QuestionCard: React.FC<Props> = ({question,answers,callback,userAnswer,questionNum,totalQuestions}) => {
    return(
        <Wrapper>
            <p>Question:{questionNum}/{totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question}} />

            <div>
                {answers.map(answer => (
                    <ButtonWrapper 
                        correct={userAnswer?.correct_answer === answer}
                        userClicked={userAnswer?.answer === answer}
                        >
                        <button onClick={callback} value={answer} disabled={userAnswer}>
                            <span dangerouslySetInnerHTML={{__html:answer}} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    );
}