import styled from "styled-components";

export const Field = styled.input `
    
    width: ${({valueWidth}: {valueWidth: number}) => `${valueWidth * 12}px`};
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;