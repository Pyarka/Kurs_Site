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
import fon from "../../Assets/letters.png"

const Container = (): ReactElement | null => {
    const [whatDoing, setDoing] = useState(0);
    const [answer, getAnswer] = useState(mockData1);
    const [result, getResult] = useState(0);
    const [variant, setVariant] = useState(0);

    useEffect(() => {
        console.log("var:", variant);
        if(variant === 1){
            console.log("var2:", variant);
            getAnswer(mockData1);
        }else if(variant === 2){
            console.log("var2:", variant);
            getAnswer(mockData2);
        }else{
            console.log("error");
            getAnswer(mockData1);
        }
    }, [variant])

    const changeValue = (masValue: string, num: number) => {
            const newArray = [...answer];
            newArray[num]["currentAnswer"] = `${masValue}`;
            getAnswer(newArray);
    }

    const checkAnswer = () => {
        console.log("ans:", answer);
        const newAnswer = answer.filter((Item) => {
            return(Item.currentAnswer === Item.rightAnswer)
        })
        getResult(newAnswer.length);
    }

    const randomVariant = () => {
        setVariant(Math.ceil(Math.random() * 2));
    }

    const numOfPoints = () => {
        if(variant === 1){
            console.log("var:", variant);
            return("14")
        }else{
            console.log("var2:", variant);
            return("11")
        }
    }

    const renderDescription = () => {
        return(
            <Description><p>В следующем тесте необходимо заполнить поля пропущенными буквами и знаками препинания.</p>
                <p>Внимание! На прохождение теста у вас есть 1,5 минуты. </p></Description>
        )
    }

    const renderField = (index: number) => {
        return (
            <InputField
                value={answer[index]["currentAnswer"]}
                onChange={(value) => {
                    changeValue(value, index);
                }}
                onBlur={(value) => {
                    changeValue(value, index);
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
        if(variant === 1){
            return renderVariant1();
        }else if(variant === 2){
            return renderVariant2();
        }else{
            return renderVariant1();
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
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    {renderDescription()}
                    <StartButton onClick={() => {
                        randomVariant();
                        console.log("variant cp  ", variant);
                        setDoing(1);
                    }}>
                        <StartButtonText>Начать тестирование</StartButtonText>
                    </StartButton>
                </div>

            )
        } else if(1 === whatDoing){

            return (
                <Task>
                    {renderText()}
                    <GetResultButton onClick={() => {
                        checkAnswer();
                        console.log(answer)
                        console.log(result)
                        setDoing(2);
                    }}>Узнать результат</GetResultButton>
                </Task>
            )
        }
        return (
            <Result>
                <p></p>
                Ваш результат:
                <TextResult>{result} из {numOfPoints()}</TextResult>
                <BackButton onClick={() => setDoing(0)}>Далее</BackButton>
            </Result>
        );
    }

    return (
        <Person>
            <img src={fon}/>
            <Header>

            </Header>
            <Body>
                {renderButton()}

            </Body>
        </Person>
    )
}

export default Container;