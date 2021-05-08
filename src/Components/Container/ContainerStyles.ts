import styled from "styled-components";

export const Person = styled.div `
    display: flex;
    flex-direction: column;
    height: 600px;
`;
export const Header = styled.div `
    display: flex;
    height: 10%;
    background-color: rgb(255, 255, 89);
`;
export const Body = styled.div `
    display: flex;
    height: 75%;
    justify-content: center;
    align-items: center;
`;
export const StartButton = styled.div `
    display: table;
`;
export const Task = styled.div `
    margin: 5% 0 0 0;
    min-height: 200px;
    width: 700px;
    border: yellow 4px solid
`;
export const Text = styled.div `
    font-family: monospace;
    font-size: 16px;
    font-weight: 600;
    min-height: 100px;
    width: 90%;
    margin: 10px 5%;
`;
export const GetResultButton = styled.div `
    cursor: pointer;
    min-width: 180px;
    min-height: 30px;
    border: 3px solid;
    text-align: center;
    color: rgb(236,137,6);
    background-color: yellow;
    margin: 20px 5% 10px 70%;
    font-size: 20px;
    font-weight: 500;
`;
export const Result = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 150px;
    border: yellow 3px solid;
`;
export const TextResult = styled.div `
    text-align: center;
    justify-content: center;
    margin: 15px 0 15px 0;
    font-size: 20px;
    font-weight: 900;
`;
export const BackButton = styled.div `
    cursor: pointer;
    text-align: center;
    justify-content: center;
    font-weight: 700;
    border: tomato 1px solid;
    height: 20px;
    width: 90px;
`;
export const StartButtonText = styled.div `
    display: table-cell;
    font-size: 30px;
    color: rgb(236, 137, 6);
    font-family: monospace;
    text-align: center;
    height: 100px;
    width: 300px;
    cursor: pointer;
    background-color: red;
    vertical-align: middle;
    border: rgb(255, 217, 89) 4px solid;
    border-radius: 8px;
    background-color: rgb(255, 255, 89);
`;
