import styled, { keyframes } from "styled-components";

export const LoadingTableContainer = styled.tbody`
  text-align: center;
  box-shadow: 0px 1px 2px 0px #00000033;
  tr {
    td {
      height: 50dvh;
      vertical-align: middle;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
    }
  }
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinningImage = styled.img`
  fill: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%); 
  width: 40px;
  height: auto;
  animation: ${spin} 1.5s linear infinite;
`;