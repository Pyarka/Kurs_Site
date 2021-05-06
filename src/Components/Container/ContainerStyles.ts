import styled from "styled-components";

export const Person = styled.div `
    display: flex;
    flex-direction: column;
    height: 800px;
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
    min-height: 200px;
    width: 700px;
    background-color: yellow;
`;
export const Text = styled.div `
    font-family: monospace;
    min-height: 100px;
    width: 90%;
    margin: 10px 5%;
`;
export const GetResultButton = styled.div `
    cursor: pointer;
    width: 100px;
    min-height: 30px;
    background-color: green;
    margin: 20px 5% 10px 80%;
`;
export const Result = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 250px;
    background-color: red;
`;
export const TextResult = styled.div `
    background-color: yellow;
    height: 150px;
    width: 80%;
    margin: 15px 0 15px 0;
`;
export const BackButton = styled.div `
    cursor: pointer;
    height: 20px;
    width: 90px;
    background-color: green;
    
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
