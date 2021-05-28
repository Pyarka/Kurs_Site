import styled from "styled-components";

import fon from "../../Assets/Smoller_letters.png";

export const Person = styled.div `
    display: flex;
    flex-direction: column;
    height: 600px;
    img {
        heigth: 100%;
        width: 100%;
        position: absolute;
        z-index: 0;
    }
    `;
export const Header = styled.div `
    display: flex;
    height: 10%;
    background-color: rgb(255, 247, 20);
    z-index: 1;
`;
export const Body = styled.div `
    display: flex;
    height: 90%;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1;
    `;
export const StartButton = styled.div `
    display: table;
    width: 300px;
`;
export const Task = styled.div `
    margin: 5% 0 0 0;
    min-height: 200px;
    width: 700px;
    border: rgb(255, 247, 20) 4px solid;
    background-color: #ffffff;
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
    border: rgb(255, 247, 20) 3px solid;
    text-align: center;
    color: rgb(255, 174, 0);
    background-color: #ffffff;
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
    color: rgb(255, 174, 0);
    font-family: monospace;
    text-align: center;
    height: 100px;
    width: 300px;
    cursor: pointer;
    vertical-align: middle;
    border: rgb(255, 247, 20) 4px solid;
    background-color: #ffffff;
`;

export const Description = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    height: 120px;
`;
