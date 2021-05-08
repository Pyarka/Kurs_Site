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
    StartButtonText,
    Description,} from "./ContainerStyles";
import InputField from "../InputField/InputField";
import {mockData1, mockData2} from "./Helper";

const Container = (): ReactElement | null => {
    const [whatDoing, setDoing] = useState(0);
    const [answer, getAnswer] = useState(mockData1);
    const [result, getResult] = useState(0);
    const [vari, setVariant] = useState(0);


    const changeValue = (masValue: string, num: number) => {
            const newArray = [...answer];
            newArray[num]["currentAnswer"] = `${masValue}`;
            getAnswer(newArray);
    }

    const checkAnswer = () => {
        answer.map((Item) => {
            if(Item.currentAnswer === Item.rightAnswer){
                getResult(result + 1)
            }else{
                if(result !== 0){
                    getResult(result - 1);
                }
            }
            return{currentAnswer: Item.currentAnswer, rightAnswer: Item.rightAnswer}
        })
    }

    const randomVariant = () => {
        const e = Math.floor(Math.random() * (3 - 1) + 1);
        setVariant(e);
        console.log("var:", vari, "e:", e);
        if(vari === 1){
            console.log("var2:", vari);
            getAnswer(mockData1);
        }else{
            console.log("var2:", vari);
            getAnswer(mockData2);
        }
    }

    const numOfPoints = () => {
        if(vari === 1){
            console.log("var:", vari);
            return("14")
        }else{
            console.log("var2:", vari);
            return("11")
        }
    }

    const renderDescription = () => {
        return(
            <Description>В следующем тесте необходимо заполнить поля пропущенными буквами и знаками препинания.
                Внимание! На прохождение теста у вас есть 1,5 минуты. </Description>
        )
    }

    const renderField = (index: number) => {
        return (
            <InputField
                value={answer[index]["currentAnswer"]}
                onChange={(value) => {
                    console.log("onChange", answer[index], ", ", value);
                    changeValue(value, index);
                    console.log("onChange", answer[index], ", ", value);
                }}
                onBlur={(value) => {
                    console.log("onBlur", answer[index], ", ", value);
                    changeValue(value, index);
                    console.log("onBlur", answer[index], ", ", value);
                }}/>
        )
    }

    const renderVariant1 = () => {
        return (
            <>
            <p>Уважаемый клиент,</p>
        <p>Прошу вас погасить деб
            {renderField(0)}торскую задолж
            {renderField(1)}ость образовавш
            {renderField(2)}ся в течени
            {renderField(3)} прошедш
            {renderField(4)} квартала.</p>

        <p> В нашем учете числи
            {renderField(5)} долг в размере пятисот шест
            {renderField(6)}сяти пяти тысяч рублей семидес
            {renderField(7)}и девяти копеек
            {renderField(8)} подл
            {renderField(9)}жащий пог
            {renderField(10)}шению до 30 сентября 2020 года.</p>

        <p>Для уточнения суммы и периода пог
            {renderField(11)}шения прошу созвони
            {renderField(12)} с бу
            {renderField(13)}алтером Ивановой И.</p>
            </>
        )
    }

    const renderVariant2 = () => {
        return (
                <>
                    <p>Прошу ра
                        {renderField(0)}мотреть возможность приобр
                        {renderField(1)}тения образца ТЭП для предст
                        {renderField(2)}ящих испытаний.</p>
                    <p>У нас в пути находи
                        {renderField(3)} образец
                        {renderField(4)} но для доставки в ваш адрес он должен раст
                        {renderField(5)}можи
                        {renderField(6)} в течени
                        {renderField(7)} недели.</p>
                    <p>На следующей недел
                        {renderField(8)}мы можем договори
                        {renderField(9)} и передать его вам.</p>
                </>
            )

    }

    const renderCurrentVariant = (): ReactElement | null => {
        if(vari === 1){
            console.log("12var:", vari);
            return renderVariant1();
        }else{
            console.log("13var:", vari);
            return renderVariant2();
        }
    }

    const renderText = () => {
        return (
            <Text>
                {renderCurrentVariant()}
            </Text>
        )
    }

    const renderButton = (): ReactElement | null => {
        if(0 === whatDoing){
            return (
                <StartButton onClick={() => {

                    console.log("1  ", vari);
                    setDoing(1);
                }}>
                    <StartButtonText>Начать тестирование</StartButtonText>
                </StartButton>
            )
        } else if(1 === whatDoing){
            randomVariant();
            return (
                <Task>
                    {renderText()}
                    <GetResultButton onClick={() => {
                        checkAnswer();
                        setDoing(2);
                    }}>Узнать результат</GetResultButton>
                </Task>
            )
        }
        return (
            <Result>
                {console.log(vari)}
                <p></p>
                Ваш результат:
                <TextResult>{result} из {numOfPoints()}</TextResult>
                <BackButton onClick={() => setDoing(0)}>Далее</BackButton>
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