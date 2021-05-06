import React, {ReactElement, useEffect, useState} from 'react';
import {Person,
    Header,
    Body,
    StartButton,
    Task,
    Text,
    GetResultButton,
    Result,
    BackButton,
    TextResult,
    StartButtonText,} from "./ContainerStyles";
import InputField from "../InputField/InputField";

const Container = (): ReactElement => {
    const [whatDoing, setDoing] = useState(0);
    const [answer, getAnswer] = useState("");
    const [result, getResult] = useState(0);

    const checkAnswer = (answer: string, rightAnswer: string) => {
        if(answer === rightAnswer){
            getResult(result + 1);
        } else {
            if(result === 1) {
                getResult(0);
            } else if(result > 1) {
                getResult(result - 1);
            }
        }
    }

    const renderText = () => {
        return (
            <Text>
                <p>Уважаеый клиент,</p>
                <p>Прошу вас
                    <InputField
                        value={answer}
                        onChange={(value) => getAnswer(value)}
                        onBlur={(value, rightAnswer) => {
                            getAnswer(value);
                            rightAnswer = "yy";
                            checkAnswer(answer, rightAnswer);
                        }}
                    />{result}</p>

            </Text>
        )
    }

    const renderButton = (): ReactElement | null => {
        if(0 === whatDoing){
            return (
                <StartButton onClick={() => setDoing(1)}>
                    <StartButtonText>Начать тестирование</StartButtonText>
                </StartButton>
            )
        } else if(1 === whatDoing){
            return (
                <Task>
                    {renderText()}
                    <GetResultButton onClick={() => setDoing(2)}>h</GetResultButton>
                </Task>
            )
        }
        return (
            <Result>
                <TextResult></TextResult>
                <BackButton onClick={() => setDoing(0)}>b</BackButton>
            </Result>
        );
    }

    return (
        <Person>
            <Header>

            </Header>
            <Body>
                {renderButton()}
            </Body>
        </Person>
    )
}

export default Container;