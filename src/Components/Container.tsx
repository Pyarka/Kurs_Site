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
    TextResult,} from "./ContainerStyles";

const Container = (): ReactElement => {
    const [whatDoing, setDoing] = useState(0);

    const renderButton = (): ReactElement | null => {
        if(0 === whatDoing){
            return (
                <StartButton onClick={() => setDoing(1)}>

                </StartButton>
            )
        } else if(1 === whatDoing){
            return (
                <Task>
                    <Text></Text>
                    <GetResultButton onClick={() => setDoing(2)}></GetResultButton>
                </Task>
            )
        }
        return (
            <Result>
                <TextResult></TextResult>
                <BackButton onClick={() => setDoing(3)}></BackButton>
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